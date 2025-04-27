import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButton() {
	return (
		<a
			href='https://wa.me/9920092640?text=Hello%20Tulika%20Mittal,%20I%20would%20like%20to%20know%20more%20about%20your%20Vastu%20services.'
			className='fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 animate-bounce'
			target='_blank'
			rel='noopener noreferrer'
		>
			<FaWhatsapp size={28} />
		</a>
	);
}
