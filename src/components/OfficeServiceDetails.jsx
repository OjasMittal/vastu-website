import { motion } from "framer-motion";
import { useState } from "react";
import BookConsultationModal from "../components/BookConsultationModal";
import BottomButtons from "./BottomButtons";
import office from "../assets/office_services.png";

function OfficeServiceDetails() {
	const [showModal, setShowModal] = useState(false);
	const handleModalToggle = () => setShowModal(!showModal);

	return (
		<div
			className='relative min-h-screen pt-28 bg-cover bg-center'
			style={{
				backgroundImage: `url(${office})`,
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
						Office Vastu
					</h1>
					<p className='text-lg text-gray-800 text-center max-w-3xl mx-auto'>
						Align your workplace energy for unstoppable business growth and
						success with our Vastu expertise.
					</p>

					{/* Content */}
					<div className='space-y-6 text-gray-800 text-justify'>
						<p>
							Our expert team brings MahaVastu-certified methods to optimize
							your office for growth, clarity, and prosperity.
						</p>

						<h2 className='text-2xl font-semibold text-orange-700'>
							Key Steps in Office Vastu:
						</h2>

						<ul className='list-disc ml-6 space-y-3'>
							<li>
								A MahaVastu certified surveyor prepares a precise to-scale plan
								of your office, noting directions and placements of activities,
								useful items, and décor elements.
							</li>
							<li>
								Comprehensive auditing is done by MahaVastu experts based on
								these surveyed maps.
							</li>
							<li>
								Problems like{" "}
								<strong className='text-orange-700'>
									blocked payments, legal disputes, wrong decisions, low order
									flow, loan rejections, investment losses, missed
									opportunities, and stagnant growth
								</strong>{" "}
								are identified and discussed.
							</li>
							<li>
								Level-wise remedial actions are implemented for complete
								rectification using MahaVastu Techniques.
							</li>
						</ul>

						<p>
							With our step-by-step correction plan, your office transforms into
							a powerhouse of productivity, profits, and positivity.
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

export default OfficeServiceDetails;
