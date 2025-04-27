import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookConsultationModal({ showModal, setShowModal }) {
	const [formData, setFormData] = useState({
		name: "",
		contactNo: "",
		selectedDateTime: new Date(),
	});
	const [errors, setErrors] = useState({
		name: "",
		contactNo: "",
		selectedDateTime: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleDateTimeChange = (date) => {
		setFormData({ ...formData, selectedDateTime: date });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newErrors = {};
		if (!formData.name) newErrors.name = "Name is required";
		if (!formData.contactNo) newErrors.contactNo = "Contact number is required";
		if (!formData.selectedDateTime)
			newErrors.selectedDateTime = "Date and time are required";

		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			const date = new Date(formData.selectedDateTime);
			const formattedDate = date.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			});
			const formattedTime = date.toLocaleTimeString("en-US", {
				hour: "2-digit",
				minute: "2-digit",
				hour12: true,
			});

			const message = `Hi Tulika, I am ${formData.name}, I want to have a Vastu consultation with you on ${formattedDate} around ${formattedTime},\nKindly let me know about your availability and charges.\nYou can contact me on ${formData.contactNo}.\nThanks.`;
			const encodedMessage = encodeURIComponent(message);
			const whatsappUrl = `https://wa.me/9920092640?text=${encodedMessage}`;

			window.open(whatsappUrl, "_blank");

			setShowModal(false);
		}
	};

	if (!showModal) return null;

	return (
		<div className='fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50'>
			<div className='bg-white p-6 rounded-lg w-full max-w-md'>
				<h3 className='text-xl font-bold mb-4'>Book a Consultation</h3>

				<form onSubmit={handleSubmit}>
					{/* Name Field */}
					<div className='mb-4'>
						<label htmlFor='name' className='block text-gray-700 font-semibold'>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleInputChange}
							className='w-full p-3 border border-gray-300 rounded-md mt-1'
							placeholder='Enter your name'
						/>
						{errors.name && (
							<p className='text-red-500 text-sm'>{errors.name}</p>
						)}
					</div>

					{/* Contact Number Field */}
					<div className='mb-4'>
						<label
							htmlFor='contactNo'
							className='block text-gray-700 font-semibold'
						>
							Contact Number
						</label>
						<input
							type='text'
							id='contactNo'
							name='contactNo'
							value={formData.contactNo}
							onChange={handleInputChange}
							className='w-full p-3 border border-gray-300 rounded-md mt-1'
							placeholder='Enter your contact number'
						/>
						{errors.contactNo && (
							<p className='text-red-500 text-sm'>{errors.contactNo}</p>
						)}
					</div>

					{/* Date & Time Picker */}
					<div className='mb-4'>
						<label
							htmlFor='selectedDateTime'
							className='block text-gray-700 font-semibold'
						>
							Select Date & Time
						</label>
						<DatePicker
							selected={formData.selectedDateTime}
							onChange={handleDateTimeChange}
							showTimeSelect
							timeIntervals={15}
							timeCaption='Time'
							dateFormat='MMMM d, yyyy h:mm aa'
							className='w-full p-3 border border-gray-300 rounded-md mt-1'
						/>
						{errors.selectedDateTime && (
							<p className='text-red-500 text-sm'>{errors.selectedDateTime}</p>
						)}
					</div>

					{/* Buttons */}
					<div className='flex justify-between items-center'>
						<button
							type='submit'
							className='px-8 py-3 bg-orange-700 text-white rounded-full shadow-lg hover:bg-orange-800 transition'
						>
							Submit
						</button>
						<button
							type='button'
							onClick={() => setShowModal(false)}
							className='text-red-500 font-semibold'
						>
							Close
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default BookConsultationModal;
