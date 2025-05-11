import React from "react";
import { motion } from "framer-motion";
import {
	BarChart3,
	Heart,
	HeartPulse,
	Wallet,
	Briefcase,
	Smile,
} from "lucide-react";
import whatWeHelp from "../assets/what_we_help.png";

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
		icon: <BarChart3 className='text-purple-600 w-8 h-8' />,
		title: "Increased Outcomes",
		description:
			"Amplify success by aligning your environment with your intentions.",
	},
	{
		icon: <Smile className='text-yellow-500 w-8 h-8' />,
		title: "Peace of Mind",
		description: "Create a serene environment for inner calm and clarity.",
	},
];

const WhatWeRectify = () => {
	return (
		<section
			id='whatWeRectify'
			className='relative min-h-screen bg-cover bg-center bg-no-repeat'
			style={{
				backgroundImage: `url(${whatWeHelp})`,
			}}
		>
			<div className='absolute inset-0 bg-white/50 backdrop-blur-[1.5px]'></div>

			<div className='relative z-10 max-w-6xl mx-auto px-4 md:px-10 py-20'>
				<h2 className='text-3xl md:text-4xl font-bold text-orange-800 text-center mb-12 drop-shadow'>
					What We Help You With
				</h2>
				<div className='grid md:grid-cols-2 gap-10'>
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
							className='flex items-start space-x-4 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300'
						>
							<div>{issue.icon}</div>
							<div>
								<h3 className='text-lg font-semibold text-gray-800'>
									{issue.title}
								</h3>
								<p className='text-sm text-gray-700'>{issue.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhatWeRectify;
