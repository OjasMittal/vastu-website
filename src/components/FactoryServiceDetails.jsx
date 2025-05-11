import { motion } from "framer-motion";
import { useState } from "react";
import BookConsultationModal from "../components/BookConsultationModal";
import BottomButtons from "./BottomButtons";
import factory from "../assets/factory_services.png";

function FactoryServiceDetails() {
	const [showModal, setShowModal] = useState(false);
	const handleModalToggle = () => setShowModal(!showModal);

	return (
		<div
			className='relative min-h-screen pt-28 bg-cover bg-center'
			style={{
				backgroundImage: `url(${factory})`,
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
						Factory Vastu
					</h1>
					<p className='text-lg text-gray-800 text-center max-w-3xl mx-auto'>
						Maximize your factory's production, quality, and cash flow with
						scientific Vastu applications.
					</p>

					{/* Content */}
					<div className='space-y-6 text-gray-800 text-justify'>
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
								<strong className='text-orange-700'>
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

export default FactoryServiceDetails;
