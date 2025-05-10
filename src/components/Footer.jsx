import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import footer from "../assets/footer.png";

export default function Footer() {
	return (
		<footer id='contact' className='bg-orange-100 text-orange-900 py-12'>
			<div className='max-w-6xl mx-auto px-6  pr-10 flex flex-col md:flex-row md:justify-between items-center'>
				{/* Left: Profile Photo + Company Info */}
				<div className='flex items-center mb-6 md:mb-0 text-center md:text-left space-x-4'>
					{/* Profile Image */}
					<img
						src= {footer}
						alt='Tulika Mittal'
						className='w-20 h-20 rounded-full object-cover shadow-md'
					/>

					{/* Name and Tagline */}
					<div className='text-left'>
						<h3 className='text-2xl font-bold'>Tulika Mittal</h3>
						<p className='mt-1'>Certified MahaVastu Expert</p>
					</div>
				</div>

				{/* Middle: Social Links */}
				<div className='flex space-x-6 mb-6 md:mb-0'>
					<a
						href='https://www.instagram.com/vastu_vid_tulika/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-orange-700 hover:text-orange-900 text-2xl'
					>
						<FaInstagram />
					</a>
					<a
						href='https://www.facebook.com/profile.php?id=61574024999387'
						target='_blank'
						rel='noopener noreferrer'
						className='text-orange-700 hover:text-orange-900 text-2xl'
					>
						<FaFacebook />
					</a>
					<a
						href='https://www.youtube.com/@VastuVidTulika'
						target='_blank'
						rel='noopener noreferrer'
						className='text-orange-700 hover:text-orange-900 text-2xl'
					>
						<FaYoutube />
					</a>
				</div>

				{/* Right: Contact Info */}
				<div className='text-center md:text-right'>
					<p className='mb-2'>📞 +91 9920092640</p>
					<p className='mb-2'>✉️ mittaltulika74@gmail.com</p>
				</div>
			</div>

			{/* Bottom Line */}
			<div className='mt-8 text-center text-sm text-orange-700 mx-auto'>
				© {new Date().getFullYear()}. All Rights Reserved. Vastu Vid Tulika
			</div>
		</footer>
	);
}
