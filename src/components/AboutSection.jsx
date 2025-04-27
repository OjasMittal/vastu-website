import { motion } from "framer-motion";

function AboutSection() {
	return (
		<section id='about' className='py-24 bg-white'>
			<div className='container mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-12'>
				{/* Image */}
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className='md:w-1/2 mb-12 md:mb-0'
				>
					<img
						src='https://housiey.com/blogs/wp-content/uploads/2024/11/Vastu-Direction-1200x900.jpg'
						alt='About Vastu'
						className='rounded-2xl shadow-2xl'
					/>
				</motion.div>

				{/* Text */}
				<motion.div
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className='md:w-1/2 text-center md:text-left md:pl-12'
				>
					<h2 className='text-4xl md:text-5xl font-bold text-orange-800 mb-6'>
						About Us
					</h2>

					<p className='text-lg text-gray-700 leading-relaxed mb-6'>
						With years of expertise in Vastu consultancy, Vastu Vid Tulika
						Mittal specializes in creating spaces that radiate{" "}
						<span className='font-semibold text-orange-700'>
							positivity, prosperity, and success
						</span>
						. Our guidance is rooted in ancient wisdom combined with modern
						practicality — ensuring real results without unnecessary stress.
					</p>

					<ul className='list-disc list-inside text-left text-gray-700 space-y-3 mb-6'>
						<li>
							Certified by{" "}
							<span className='font-semibold text-orange-700'>MahaVastu</span> –
							the most trusted name in Vastu Shastra.
						</li>
						<li>
							Tailor-made Vastu solutions for{" "}
							<span className='font-semibold'>
								homes, offices, shops, and factories
							</span>
							.
						</li>
						<li>
							<span className='font-semibold'>No demolition required</span> — we
							offer simple, practical, and effective remedies.
						</li>
						<li>
							Focused on enhancing your{" "}
							<span className='font-semibold'>
								health, wealth, relationships, and career growth
							</span>
							.
						</li>
					</ul>

					<p className='text-lg text-gray-700 leading-relaxed'>
						Our mission is to transform your living and working environments
						into powerful energy hubs — promoting holistic well-being,
						happiness, and abundance in your life.
					</p>
				</motion.div>
			</div>
		</section>
	);
}

export default AboutSection;
