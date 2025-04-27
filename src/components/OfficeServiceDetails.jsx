import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import BookConsultationModal from "../components/BookConsultationModal"; // Assuming you have this modal

function OfficeServiceDetails() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => setShowModal(!showModal);

  return (
    <div className="min-h-screen bg-yellow-50 p-6 md:p-12 flex flex-col justify-between">
      <BookConsultationModal showModal={showModal} setShowModal={setShowModal} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold text-orange-800 mb-6 text-center">Office Vastu Service</h1>
        <p className="text-lg text-orange-700 mb-10 text-center max-w-3xl mx-auto">
          Align your workplace energy for unstoppable business growth and success with our Vastu expertise.
        </p>

        {/* Image */}
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Office Workspace"
          className="rounded-2xl shadow-lg mx-auto mb-10 w-full md:w-3/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="space-y-8 text-orange-600 text-justify"
        >
          <p>
            Our expert team brings MahaVastu-certified methods to optimize your office for growth, clarity, and prosperity.
          </p>

          <h2 className="text-2xl font-semibold text-orange-700">Key Steps in Office Vastu:</h2>

          <ul className="list-disc ml-6 space-y-3">
            <li>A MahaVastu certified surveyor prepares a precise to-scale plan of your office, noting directions and placements of activities, useful items, and décor elements.</li>
            <li>Comprehensive auditing is done by MahaVastu experts based on these surveyed maps.</li>
            <li>Problems like <strong>blocked payments, legal disputes, wrong decisions, low order flow, loan rejections, investment losses, missed opportunities, and stagnant growth</strong> are identified and discussed.</li>
            <li>Level-wise remedial actions are implemented for complete rectification using MahaVastu Techniques.</li>
          </ul>

          <p>
            With our step-by-step correction plan, your office transforms into a powerhouse of productivity, profits, and positivity.
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom Buttons */}
      <div className="flex justify-between items-center max-w-5xl mx-auto w-full mt-16">
        <Link to="/">
          <button className="px-6 py-3 bg-orange-200 text-orange-800 font-semibold rounded-full shadow hover:bg-orange-300 transition">
            ← Back to Services
          </button>
        </Link>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleModalToggle}
          className="px-6 py-3 bg-orange-700 text-white font-semibold rounded-full shadow hover:bg-orange-800 transition mr-4"
        >
          Book a Consultation
        </motion.button>
      </div>
    </div>
  );
}

export default OfficeServiceDetails;
