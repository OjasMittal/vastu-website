import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import BookConsultationModal from "../components/BookConsultationModal";
import BottomButtons from "./BottomButtons";

function HomeServiceDetails() {
	const [showModal, setShowModal] = useState(false);

	const handleModalToggle = () => setShowModal(!showModal);

	return (
		<div className='min-h-screen bg-yellow-50 p-6 pt-28 md:p-12 flex flex-col justify-between'>
			{/* Modal */}
			<BookConsultationModal
				showModal={showModal}
				setShowModal={setShowModal}
			/>

			{/* Main Content */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className='max-w-6xl mx-auto'
			>
				{/* Heading */}
				<h1 className='text-4xl font-bold text-orange-800 mb-6 text-center'>
					Home Vastu Service
				</h1>
				<p className='text-lg text-black mb-10 text-center max-w-3xl mx-auto'>
					Unlock the secrets to a harmonious and prosperous home with our expert
					Vastu Audit.
				</p>

				{/* Image */}
				<motion.img
					src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
					alt='Beautiful Home'
					className='rounded-2xl shadow-lg mx-auto mb-10 w-full md:w-3/4'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 1 }}
				/>

				{/* Content */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7 }}
					className='space-y-8 text-black text-justify'
				>
					<p>
						Our certified experts conduct a detailed Vastu Dosha Audit by
						personally visiting your home. We carefully observe and analyze the
						factors influencing peace, health, wealth, and relationships.
					</p>

					<h2 className='text-2xl font-semibold text-orange-700'>
						Key Audits and Treatments:
					</h2>

					<ul className='list-disc ml-6 space-y-3'>
						<li>
							<strong className='text-orange-700'>
								Entrance, Toilets, Sewage, Directional Strength, Road Hit:
							</strong>{" "}
							All vital elements are treated by MahaVastu Experts to balance the
							five elements (Panchmahabhutas).
						</li>
						<li>
							<strong className='text-orange-700'>
								Relocation & Rectification:
							</strong>{" "}
							Activities and utilities are shifted using special MahaVastu
							techniques to enhance positive energies.
						</li>
						<li>
							<strong className='text-orange-700'>
								Interior Decor Alignment:
							</strong>{" "}
							Furniture, paintings, mirrors, and decor items are strategically
							repositioned to support Vastu compliance.
						</li>
						<li>
							<strong className='text-orange-700'>
								Astrological Balancing:
							</strong>{" "}
							Energy alignment is done based on your horoscope, syncing the
							home’s energy field with cosmic planetary forces.
						</li>
						<li>
							<strong className='text-orange-700'>Marma Points Remedy:</strong>{" "}
							Powerful rectifications are done based on ancient energy points to
							unlock blockages and increase flow.
						</li>
						<li>
							<strong className='text-orange-700'>
								Intuitive Devta Diagnosis:
							</strong>{" "}
							Unique MahaVastu method to diagnose Devtas (spiritual energies)
							and perform remedies to strengthen your Karma Siddhi (success
							potential).
						</li>
					</ul>

					<p>
						Our goal is not just correction — we transform your house into a
						living magnet of health, wealth, happiness, and peace.
					</p>
				</motion.div>
			</motion.div>
			<BottomButtons onBookClick={handleModalToggle} />
		</div>
	);
}

export default HomeServiceDetails;
