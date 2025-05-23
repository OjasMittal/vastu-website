import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Flag from "react-world-flags";

const testimonials = [
	{
		name: "Anonymous",
		feedback:
			"Their Vastu solutions changed the energy of our home! We feel more peace and prosperity now. Highly recommended!",
		city: "Mumbai",
		country: "India",
		countryCode: "IN",
	},
	{
		name: "Anonymous",
		feedback:
			"Incredible experience. Every suggestion was practical and made a real difference to our business growth.",
		city: "London",
		country: "UK",
		countryCode: "GB",
	},
	{
		name: "Anonymous",
		feedback:
			"Tulika Maam's inputs on color paint in house and a few other changes helped me to get more success in my career and promotion and also health good. Thanks for your advise and checking in regularly.",
		city: "Hyderabad",
		country: "India",
		countryCode: "IN",
	},
	{
		name: "Anonymous",
		feedback:
			"I am grateful for their professional advice. Positive vibes and success followed after implementing their remedies.",
		city: "Ho Chi Minh City",
		country: "Vietnam",
		countryCode: "VN",
	},
	{
		name: "Anonymous",
		feedback:
			"Very Small & easy to do remedies given by Tulika Maam, helped me improve my relations with my wife and kids.",
		city: "Kolkata",
		country: "India",
		countryCode: "IN",
	},
	{
		name: "Anonymous",
		feedback:
			"My business had been stagnant for months. After implementing Tulika Ma'am's suggestions, we saw growth within weeks. Truly magical!",
		city: "Jaipur",
		country: "India",
		countryCode: "IN",
	},
	{
		name: "Anonymous",
		feedback:
			"I had money stuck for over a year. Just a few changes as advised,and the payments started clearing up.Can't thank her enough!",
		city: "Lucknow",
		country: "India",
		countryCode: "IN",
	},
	{
		name: "Anonymous",
		feedback:
			"Earlier, I used to fall ill frequently. Tulika Ma'am's remedies brought visible improvement in my health and energy levels.",
		city: "Chandigarh",
		country: "India",
		countryCode: "IN",
	},
	{
		name: "Anonymous",
		feedback:
			"Her consultation helped me attract more clients to my architecture firm. Business has been booming since.",
		city: "Pune",
		country: "India",
		countryCode: "IN",
	},
	{
		name: "Anonymous",
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
			setCurrentIndex((prevIndex) =>
				prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
			);
		}, 6000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className='py-16 bg-orange-100 text-center overflow-hidden'>
			<h2 className='text-3xl md:text-4xl font-bold text-orange-800 mb-12'>
				What Do Our Client's Say About Us?
			</h2>

			<div className='relative w-full max-w-xl mx-auto h-56 flex items-center justify-center'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={currentIndex}
						initial={{ x: 300, rotateY: -45, opacity: 0 }}
						animate={{ x: 0, rotateY: 0, opacity: 1 }}
						exit={{ x: -300, rotateY: 45, opacity: 0 }}
						transition={{ duration: 1 }}
						className='absolute bg-white shadow-2xl rounded-2xl p-8 w-full'
					>
						<p className='text-lg text-gray-700 mb-4'>
							"{testimonials[currentIndex].feedback}"
						</p>
						<h4 className='text-orange-700 font-semibold'>
							— {testimonials[currentIndex].name}
						</h4>

						{/* City, Country, and Flag Section */}
						<div className='flex items-center mt-4'>
							<div className='w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full overflow-hidden'>
								{/* Flag Image */}
								<Flag
									code={testimonials[currentIndex].countryCode}
									className='w-full h-full object-cover'
								/>
							</div>
							<span className='text-sm italic text-gray-600 ml-2'>
								{testimonials[currentIndex].city},{" "}
								{testimonials[currentIndex].country}
							</span>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

