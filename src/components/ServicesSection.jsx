import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // if you use React Router

function ServicesSection() {
	return (
		<section id='services' className='py-20 bg-yellow-100'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.2, duration: 1 }}
				className='text-center'
			>
				<h2 className='text-3xl md:text-4xl font-bold text-orange-800'>
					Our Services
				</h2>
				<p className='mt-4 text-lg md:text-xl text-orange-600 max-w-3xl mx-auto'>
					Discover the power of Vastu Shastra to bring balance, health, wealth,
					and good relationships to your space.
				</p>
			</motion.div>

			{/* Services Grid */}
			<div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
				{/* Home Service */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5, duration: 1 }}
					className='service-card bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between'
				>
					<img
						src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
						alt='Home'
						className='w-full h-64 object-cover rounded-lg'
					/>
					<h3 className='text-xl font-semibold text-orange-700 mt-4'>Home</h3>
					<p className='mt-2 text-sm text-orange-600'>
						Personalized Vastu solutions to create a harmonious living
						environment.
					</p>
					<Link to='/services/home'>
						<button className='mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded'>
							Know More
						</button>
					</Link>
				</motion.div>

				{/* Office Service */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.8, duration: 1 }}
					className='service-card bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between'
				>
					<img
						src='https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D'
						alt='Office'
						className='w-full h-64 object-cover rounded-lg'
					/>
					<h3 className='text-xl font-semibold text-orange-700 mt-4'>Office</h3>
					<p className='mt-2 text-sm text-orange-600'>
						Boost success and positivity in your office space through Vastu
						corrections.
					</p>
					<Link to='/services/office'>
						<button className='mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded'>
							Know More
						</button>
					</Link>
				</motion.div>

				{/* Factory Service */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2.1, duration: 1 }}
					className='service-card bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between'
				>
					<img
						src='https://media.istockphoto.com/id/1136735121/photo/industrial-plant-for-the-production-of-large-mechanisms-machines-and-structures.webp?a=1&b=1&s=612x612&w=0&k=20&c=4DtPULzc9pNEovM4YVuiprmJYmfAOk96U1lW09yhSj8='
						alt='Factory'
						className='w-full h-64 object-cover rounded-lg'
					/>
					<h3 className='text-xl font-semibold text-orange-700 mt-4'>
						Factory
					</h3>
					<p className='mt-2 text-sm text-orange-600'>
						Enhance production efficiency and profitability with Vastu
						practices.
					</p>
					<Link to='/services/factory'>
						<button className='mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded'>
							Know More
						</button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}

export default ServicesSection;
