import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mom from "../assets/mom_img.jpg";

function AboutSection() {
	return (
		<section
			id='about'
			className='py-16 bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-200'
		>
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
						className='rounded-xl shadow-lg w-full max-w-[400px] md:max-w-[500px] transform hover:scale-105 transition-transform duration-300'
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
						Why We?
					</h2>

					<p className='text-lg text-gray-700 leading-relaxed mb-6'>
						With years of expertise in Vastu consultancy,{" "}
						<span className='font-semibold text-gray-900'>
							Vastu Vid Tulika Mittal
						</span>{" "}
						specializes in creating spaces that radiate{" "}
						<span className='font-semibold text-orange-700'>
							positivity, prosperity, and success.
						</span>{" "}
						Our guidance combines ancient wisdom with modern practicality —
						ensuring results
						<span className='font-semibold text-orange-700'>
							{" "}
							without demolition, with simple, effective remedies.
						</span>
					</p>

					<div className='overflow-x-auto mb-6'>
						<table className='w-full max-w-3xl mx-auto text-left border-collapse text-sm md:text-base'>
							<thead>
								<tr className='bg-orange-200 text-orange-900'>
									<th className='p-3 border border-orange-300 font-semibold'>
										Why Choose Us Over Others?
									</th>
									<th className='p-3 border border-orange-300 font-semibold text-center'>
										Vastu Vid Tulika
									</th>
									<th className='p-3 border border-orange-300 font-semibold text-center'>
										Others
									</th>
								</tr>
							</thead>
							<tbody className='text-gray-700'>
								{[
									{
										point:
											"Certified by MahaVastu (India's top Vastu Training Center)",
										us: true,
										others: false,
									},
									{
										point:
											"Custom Tailor Made Vastu solutions for  your Home/Office/Factory",
										us: true,
										others: false,
									},
									{
										point: "Personal visits to Client's Site",
										us: true,
										others: false,
									},
									{
										point: (
											<>
												No Demolition done
												<br />
												<span className='text-sm text-gray-600'>
													(We suggest very simple & easy to do remedies that
													suits your pocket)
												</span>
											</>
										),
										us: true,
										others: false,
									},
									{
										point: (
											<>
												Advanced and Precise Tools & Softwares
												<br />
												<span className='text-sm text-gray-600'>
													(Even a 1° error in Vastu solutions can cause
													problems)
												</span>
											</>
										),
										us: true,
										others: false,
									},
								].map((row, idx) => (
									<tr
										key={idx}
										className={idx % 2 === 0 ? "bg-yellow-50" : "bg-white"}
									>
										<td className='p-3 border border-orange-200'>
											{row.point}
										</td>
										<td className='p-3 border border-orange-200 text-center text-green-600'>
											{row.us ? (
												<i className='fa fa-check-circle' />
											) : (
												<i className='fa fa-times-circle text-red-500' />
											)}
										</td>
										<td className='p-3 border border-orange-200 text-center text-red-500'>
											{row.others ? (
												<i className='fa fa-check-circle text-green-600' />
											) : (
												<i className='fa fa-times-circle' />
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<p className='text-lg text-gray-700 leading-relaxed'>
						Our mission is to transform your spaces into powerful energy hubs,
						promoting holistic well-being, happiness, and abundance.
					</p>

					<p className='mt-6 text-lg'>
						✨ Check out some{" "}
						<Link
							to='/media'
							className='text-orange-700 font-semibold hover:underline transition-all duration-300'
						>
							Vastu tips
						</Link>{" "}
						by Vastu Vid Tulika!
					</p>
				</motion.div>
			</div>
		</section>
	);
}

export default AboutSection;
