import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import home from "../assets/home_services.png";
import office from "../assets/office_services.png";
import factory from "../assets/factory_services.png";

const slides = [
	{
		image: home,
		title: "Home Vastu",
		description: "Create a peaceful and harmonious home environment.",
		link: "/services/home",
	},
	{
		image: office,
		title: "Office Vastu",
		description: "Enhance positivity and productivity in your workspace.",
		link: "/services/office",
	},
	{
		image: factory,
		title: "Factory Vastu",
		description: "Maximize efficiency and profitability through Vastu.",
		link: "/services/factory",
	},
];

function ServicesSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const timeoutRef = useRef(null);
	const touchStartX = useRef(null);

	const handleNext = () =>
		setCurrentIndex((prev) => (prev + 1) % slides.length);
	const handlePrev = () =>
		setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
	const goToSlide = (index) => setCurrentIndex(index);

	useEffect(() => {
		timeoutRef.current = setTimeout(handleNext, 5000);
		return () => clearTimeout(timeoutRef.current);
	}, [currentIndex]);

	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = (e) => {
		const touchEndX = e.changedTouches[0].clientX;
		const diff = touchStartX.current - touchEndX;
		if (diff > 50) handleNext();
		else if (diff < -50) handlePrev();
	};

	const { image, title, description, link } = slides[currentIndex];

	return (
		<section
			id='services'
			className='relative h-[90vh] w-full overflow-hidden'
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			{/* Background Image */}
			<AnimatePresence mode='wait'>
				<motion.div
					key={currentIndex}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7, ease: "easeInOut" }}
					className='absolute inset-0'
				>
					<img
						src={image}
						alt={title}
						className='w-full h-full object-cover brightness-50'
					/>
				</motion.div>
			</AnimatePresence>

			{/* Content */}
			<div className='relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6'>
				<motion.h2
					key={title}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 1 }}
					className='text-4xl md:text-6xl font-bold'
				>
					{title}
				</motion.h2>
				<motion.p
					key={description}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 1 }}
					className='mt-4 text-lg md:text-2xl max-w-xl'
				>
					{description}
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 1 }}
				>
					<Link to={link}>
						<button className='mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300'>
							Know More
						</button>
					</Link>
				</motion.div>
			</div>

			{/* Left Arrow */}
			<button
				onClick={handlePrev}
				className='hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full border border-white/20 shadow-md hover:shadow-lg transition-transform transform hover:scale-110'
			>
				<ChevronLeft size={28} strokeWidth={2.5} />
			</button>

			{/* Right Arrow */}
			<button
				onClick={handleNext}
				className='hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 backdrop-blur-md bg-white/10 hover:bg-white/20 text-white p-3 md:p-4 rounded-full border border-white/20 shadow-md hover:shadow-lg transition-transform transform hover:scale-110'
			>
				<ChevronRight size={28} strokeWidth={2.5} />
			</button>

			{/* Dot Indicators */}
			<div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20'>
				{slides.map((_, idx) => (
					<button
						key={idx}
						onClick={() => goToSlide(idx)}
						className={`w-3 h-3 rounded-full transition-all duration-300 ${
							idx === currentIndex ? "bg-white" : "bg-white/50"
						}`}
					/>
				))}
			</div>
		</section>
	);
}

export default ServicesSection;
