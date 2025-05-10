import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import BookConsultationModal from "../components/BookConsultationModal";
import BottomButtons from "./BottomButtons";

function FactoryServiceDetails() {
	const [showModal, setShowModal] = useState(false);

	const handleModalToggle = () => setShowModal(!showModal);

	return (
		<div className='min-h-screen bg-yellow-50 p-6 pt-28 md:p-12 flex flex-col justify-between'>
			<BookConsultationModal
				showModal={showModal}
				setShowModal={setShowModal}
			/>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className='max-w-6xl mx-auto'
			>
				{/* Heading */}
				<h1 className='text-4xl font-bold text-orange-800 mb-6 text-center'>
					Factory Vastu Service
				</h1>
				<p className='text-lg text-orange-700 mb-10 text-center max-w-3xl mx-auto'>
					Maximize your factory's production, quality, and cash flow with
					scientific Vastu applications.
				</p>

				{/* Image */}
				<motion.img
					src='https://media.istockphoto.com/id/1136735121/photo/industrial-plant-for-the-production-of-large-mechanisms-machines-and-structures.webp?a=1&b=1&s=612x612&w=0&k=20&c=4DtPULzc9pNEovM4YVuiprmJYmfAOk96U1lW09yhSj8='
					alt='Factory Image'
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
					className='space-y-8 text-orange-600 text-justify'
				>
					<p>
						We specialize in aligning your factory layout and machinery
						placements with natural energies for exponential business success.
					</p>

					<h2 className='text-2xl font-semibold text-orange-700'>
						Key Steps in Factory Vastu:
					</h2>

					<ul className='list-disc ml-6 space-y-3'>
						<li>
							MahaVastu certified surveyor prepares an accurate to-the-scale
							layout marking all machinery, utilities, and décor items.
						</li>
						<li>
							Seven detailed audits are conducted on these maps by senior
							MahaVastu Experts.
						</li>
						<li>
							Discussion and identification of issues related to{" "}
							<strong>
								production quality, sales, cash flow, banking support, and
								departmental issues
							</strong>{" "}
							is done thoroughly.
						</li>
						<li>
							Remedies and realignment are done systematically using MahaVastu
							techniques for maximum benefit.
						</li>
					</ul>

					<p>
						Our proven methodologies unlock hidden potential in your factory,
						ensuring smoother operations, faster growth, and prosperity.
					</p>
				</motion.div>
			</motion.div>
			<BottomButtons onBookClick={handleModalToggle} />
		</div>
	);
}

export default FactoryServiceDetails;
