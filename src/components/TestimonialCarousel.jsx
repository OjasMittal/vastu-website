import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Flag from "react-world-flags";

const testimonials = [
	{
		name: "Sandeep Rawat",
		feedback:
			"Their Vastu solutions changed the energy of our home! We feel more peace and prosperity now. Highly recommended!",
		city: "Mumbai",
		country: "India",
		countryCode: "IN",
	},
	{
		name: "Chandan Agrawal",
		feedback:
			"Incredible experience. Every suggestion was practical and made a real difference to our business growth.",
		city: "London",
		country: "UK",
		countryCode: "GB",
	},
	{
		name: "Ankur Chandra",
		feedback:
			"Tulika Maam's inputs on color paint in house and a few other changes helped me to get more success in my career and promotion and also health good. Thanks for your advise and checking in regularly.",
		city: "Hyderabad",
		country: "India",
		countryCode: "IN",
	},
	{
		name: "Anchal Gupta",
		feedback:
			"I am grateful for their professional advice. Positive vibes and success followed after implementing their remedies.",
		city: "Ho Chi Minh City",
		country: "Vietnam",
		countryCode: "VN",
	},
	{
		name: "Abhishek Bhattacharya",
		feedback:
			"Very Small & easy to do remedies given by Tulika Maam, helped me improve my relations with my wife and kids.",
		city: "Kolkata",
		country: "India",
		countryCode: "IN",
	},
	{
		name: "Megha Jain",
		feedback:
			"My business had been stagnant for months. After implementing Tulika Ma'am's suggestions, we saw growth within weeks. Truly magical!",
		city: "Jaipur",
		country: "India",
		countryCode: "IN",
	},
	{
		name: "Rahul Verma",
		feedback:
			"I had money stuck for over a year. Just a few changes as advised,and the payments started clearing up.Can't thank her enough!",
		city: "Lucknow",
		country: "India",
		countryCode: "IN",
	},
	{
		name: "Priyanka Bansal",
		feedback:
			"Earlier, I used to fall ill frequently. Tulika Ma'am's remedies brought visible improvement in my health and energy levels.",
		city: "Chandigarh",
		country: "India",
		countryCode: "IN",
	},
	{
		name: "Vikas Mehta",
		feedback:
			"Her consultation helped me attract more clients to my architecture firm. Business has been booming since.",
		city: "Pune",
		country: "India",
		countryCode: "IN",
	},
	{
		name: "Renu Agarwal",
		feedback:
			"After years of trying, my salon finally started getting steady clients post the Vastu corrections. Highly satisfied!",
		city: "Indore",
		country: "India",
		countryCode: "IN",
	},
];

export default function TestimonialCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
		}, 6000);

		return () => clearInterval(timer);
	}, []);

	// Get current two testimonials (looping if necessary)
	const getVisibleTestimonials = () => {
		const first = testimonials[currentIndex];
		const second = testimonials[(currentIndex + 1) % testimonials.length];
		return [first, second];
	};

	return (
		<div className='py-16 bg-orange-50 text-center overflow-hidden'>
			<h2 className='text-3xl md:text-4xl font-bold text-orange-800 mb-12'>
				Testimonials
			</h2>

			<div className='relative w-full max-w-4xl mx-auto flex justify-center items-center h-64'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0, x: 300 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -300 }}
						transition={{ duration: 1 }}
						className='flex gap-6 w-full justify-center absolute'
					>
						{getVisibleTestimonials().map((testimonial, idx) => (
							<div
								key={idx}
								className='bg-white shadow-2xl rounded-2xl p-6 w-full sm:w-[300px] md:w-[320px] lg:w-[340px] xl:w-[360px] flex-shrink-0'
							>
								<p className='text-gray-700 mb-4 text-sm'>
									" {testimonial.feedback} "
								</p>
								<h4 className='text-orange-700 font-semibold'>
									— {testimonial.name}
								</h4>
								<div className='flex items-center mt-4'>
									<div className='w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full overflow-hidden'>
										<Flag
											code={testimonial.countryCode}
											className='w-full h-full object-cover'
										/>
									</div>
									<span className='text-sm italic text-gray-600 ml-2'>
										{testimonial.city}, {testimonial.country}
									</span>
								</div>
							</div>
						))}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
