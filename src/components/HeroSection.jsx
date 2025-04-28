import { useState } from "react";
import { motion } from "framer-motion";
import BookConsultationModal from "./BookConsultationModal"; // Import here
import LottieAnimation from "./LottieAnimation";

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
				className='w-full overflow-hidden -mt-38'
			>
				<img
					src='https://yt3.googleusercontent.com/7zlq8Vs41SM9f8oYD52Dm9URqDnqP-opIFPRjvdA_L3k7fM02k3Tpi60dpK-dkyy9Ede7jRbUDk=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
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
				Bring harmony, peace, and prosperity into your life with expert Vastu
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
			<LottieAnimation />
		</section>
	);
}

export default HeroSection;
