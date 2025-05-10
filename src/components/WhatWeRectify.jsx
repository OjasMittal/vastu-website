import React from "react";
import { motion } from "framer-motion";
import { Heart, HeartPulse, Wallet, Briefcase, Smile } from "lucide-react";
import about from "../assets/about.png";

const issues = [
	{
		icon: <Heart className='text-pink-600 w-8 h-8' />,
		title: "Love & Relationships",
		description: "Harmonize your relationships with balanced energies.",
	},
	{
		icon: <HeartPulse className='text-red-500 w-8 h-8' />,
		title: "Health",
		description: "Remove blockages that impact physical and mental well-being.",
	},
	{
		icon: <Wallet className='text-green-600 w-8 h-8' />,
		title: "Wealth Flow",
		description: "Enhance prosperity and retain financial stability.",
	},
	{
		icon: <Briefcase className='text-blue-600 w-8 h-8' />,
		title: "Career & Job",
		description: "Unlock better opportunities and career growth.",
	},
	{
		icon: <Smile className='text-yellow-500 w-8 h-8' />,
		title: "Peace of Mind",
		description: "Create a serene environment for inner calm and clarity.",
	},
];

const WhatWeRectify = () => {
	return (
		<section id='whatWeRectify' className='py-20 bg-orange-50'>
			<div className='max-w-6xl mx-auto px-4 md:px-10'>
				<h2 className='text-3xl md:text-4xl font-bold text-orange-800 text-center mb-10'>
					What We Help You With
				</h2>
				<div className='flex flex-col md:flex-row items-center gap-10'>
					{/* Left Image */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='w-full md:w-4/5 flex justify-center'
					>
						<img
							src={about}
							alt='Vastu Illustration'
							className='rounded-3xl shadow-md w-full max-w-[600px] md:max-w-[620px] mt-6'
						/>
					</motion.div>

					{/* Right Content */}
					<div className='w-full md:w-3/5 space-y-6 md:pl-6'>
						{issues.map((issue, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								whileHover={{
									scale: 1.05,
									transition: { type: "spring", stiffness: 300, damping: 15 },
								}}
								className='flex items-start space-x-4 bg-gray-100 p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300'
							>
								<div>{issue.icon}</div>
								<div>
									<h3 className='text-lg font-semibold text-gray-700'>
										{issue.title}
									</h3>
									<p className='text-sm text-gray-600'>{issue.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhatWeRectify;
