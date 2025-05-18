import { useState } from "react";
import { motion } from "framer-motion";
import BookConsultationModal from "./BookConsultationModal";
import LottieAnimation from "./LottieAnimation";
import header from "../assets/header.png";

function HeroSection() {
	const [showModal, setShowModal] = useState(false);

	const handleModalToggle = () => setShowModal(!showModal);

	return (
		<section
			id='home'
			className='relative min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex flex-col justify-center items-center text-center px-4 pt-24'
		>
			{/* Modal */}
			<BookConsultationModal
				showModal={showModal}
				setShowModal={setShowModal}
			/>

			{/* Header Image */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className='w-full overflow-hidden -mt-21'
			>
				<img
					src={header}
					alt='Header'
					className='w-full h-auto object-contain'
				/>
			</motion.div>

			{/* Main Content */}

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 1 }}
				className='mt-6 text-xl md:text-2xl text-orange-600 max-w-2xl'
			>
				Bring "harmony, peace, prosperity" into your life with expert Vastu
				consultation.
			</motion.p>

			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className='mt-10 px-8 py-3 bg-orange-700 text-white rounded-full shadow-lg hover:bg-orange-800 transition'
				onClick={handleModalToggle}
			>
				Book a Consultation
			</motion.button>
			<div className='mt-2 relative group text-sm text-orange-800 font-medium'>
				<span className='cursor-pointer'>
					First consultation is{" "}
					<span className='font-semibold underline'>Free!</span>
				</span>
				<div className='absolute left-1/2 -translate-x-1/2 mt-2 w-64 rounded-lg bg-white p-3 text-sm text-gray-700 shadow-lg border border-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10'>
					A 20-minute session to understand your problems and a basic Vastu
					assessment.
				</div>
			</div>

			<LottieAnimation />
		</section>
	);
}

export default HeroSection;
