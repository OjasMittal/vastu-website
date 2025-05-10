import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BottomButtons({ onBookClick }) {
	return (
		<div className='flex justify-between items-center max-w-5xl mx-auto w-full mt-16'>
			<Link to='/'>
				<button className='px-6 py-3 bg-orange-200 text-orange-800 font-semibold rounded-full shadow hover:bg-orange-300 transition'>
					← Back to Services
				</button>
			</Link>

			<motion.button
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={onBookClick}
				className='px-6 py-3 bg-orange-700 text-white font-semibold rounded-full shadow hover:bg-orange-800 transition mr-4'
			>
				Book a Consultation
			</motion.button>
		</div>
	);
}
