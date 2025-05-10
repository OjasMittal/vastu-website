import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mom from "../assets/mom_img.jpg";

function AboutSection() {
	return (
		<section id='about' className='py-24 bg-yellow-100'>
			<div className='container mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-12'>
				{/* Image */}
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className='w-full md:w-2/5 mb-12 md:mb-0 flex justify-center md:justify-end pr-4'
				>
					<img
						src={mom}
						alt='Tulika Mittal'
						className='rounded-3xl shadow-md w-full max-w-[400px] md:max-w-[520px] mt-16'
					/>
				</motion.div>

				{/* Text */}
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className='w-full md:w-3/5 text-center md:text-left md:pl-12'
				>
					<h2 className='text-4xl md:text-5xl font-bold text-orange-800 mb-6'>
						About Us
					</h2>

					<p className='text-lg text-gray-700 leading-relaxed mb-6'>
						With years of expertise in Vastu consultancy,
						<span className='font-semibold text-gray-900'>
							{" "}
							Vastu Vid Tulika Mittal{" "}
						</span>
						specializes in creating spaces that radiate{" "}
						<span className='font-semibold text-orange-700'>
							positivity, prosperity, and success
						</span>
						. Our guidance is rooted in ancient wisdom combined with modern
						practicality — ensuring real results{" "}
						<span className='font-semibold text-orange-700'>
							without any demolition , with simple - easy to do - effective
							remedies.
						</span>
					</p>

					<ul className='space-y-3 mb-6 text-left text-gray-700'>
						{[
							<>
								Certified by{" "}
								<span className='font-semibold text-orange-700'>MahaVastu</span>{" "}
								– the most trusted name in Vastu Shastra.
							</>,
							<>
								Tailor-made Vastu solutions with personal visits for your{" "}
								<span className='font-semibold'>home, office or factory</span>.
							</>,
							<>
								<span className='font-semibold'>No demolition required</span> —
								we offer simple, practical, and effective remedies.
							</>,
							<>
								Focused on enhancing your{" "}
								<span className='font-semibold'>
									health, wealth, relationships, and career growth
								</span>
								.
							</>,
						].map((item, index) => (
							<li key={index} className='flex items-start'>
								<span className='text-green-600 mr-2 mt-1'>✅</span>
								<span>{item}</span>
							</li>
						))}
					</ul>

					<p className='text-lg text-gray-700 leading-relaxed'>
						Our mission is to transform your living and working environments
						into powerful energy hubs — promoting holistic well-being,
						happiness, and abundance in your life.
					</p>
					<p className='mt-6 text-lg'>
					✨ Check out some{" "}
						<Link
							to='/media'
							className='text-orange-700 font-semibold hover:underline'
						>
							Vastu tips & videos
						</Link>
					</p>
				</motion.div>
			</div>
		</section>
	);
}

export default AboutSection;
