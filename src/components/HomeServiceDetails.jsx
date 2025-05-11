import { motion } from "framer-motion";
import { useState } from "react";
import BookConsultationModal from "../components/BookConsultationModal";
import BottomButtons from "./BottomButtons";
import home from "../assets/home_services.png";

function HomeServiceDetails() {
	const [showModal, setShowModal] = useState(false);
	const handleModalToggle = () => setShowModal(!showModal);

	return (
		<div
			className='relative min-h-screen pt-28 bg-cover bg-center'
			style={{
				backgroundImage: `url(${home})`,
			}}
		>
			{/* Overlay */}
			<div className='absolute inset-0 bg-black/40 backdrop-blur-[2px]' />

			{/* Modal */}
			<BookConsultationModal
				showModal={showModal}
				setShowModal={setShowModal}
			/>

			{/* Main Content */}
			<div className='relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-12'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 space-y-6'
				>
					{/* Heading */}
					<h1 className='text-4xl font-bold text-orange-800 text-center'>
						Home Vastu
					</h1>
					<p className='text-lg text-gray-800 text-center max-w-3xl mx-auto'>
						Unlock the secrets to a harmonious and prosperous home with our
						expert Vastu Audit.
					</p>

					{/* Content */}
					<div className='space-y-6 text-gray-800 text-justify'>
						<p>
							Our certified experts conduct a detailed Vastu Dosha Audit by
							personally visiting your home. We carefully observe and analyze
							the factors influencing peace, health, wealth, and relationships.
						</p>

						<h2 className='text-2xl font-semibold text-orange-700'>
							Key Audits and Treatments:
						</h2>

						<ul className='list-disc ml-6 space-y-3'>
							<li>
								<strong className='text-orange-700'>
									Entrance, Toilets, Sewage, Directional Strength, Road Hit:
								</strong>{" "}
								All vital elements are treated by MahaVastu Experts to balance
								the five elements (Panchmahabhutas).
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
								<strong className='text-orange-700'>
									Marma Points Remedy:
								</strong>{" "}
								Powerful rectifications are done based on ancient energy points
								to unlock blockages and increase flow.
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
					</div>
				</motion.div>
			</div>

			{/* Bottom Buttons */}
			<div className='relative z-10 mt-8'>
				<BottomButtons onBookClick={handleModalToggle} />
			</div>
		</div>
	);
}

export default HomeServiceDetails;
