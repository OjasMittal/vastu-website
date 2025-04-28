import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Add this

function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			if (offset > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navbarClasses = scrolled
		? "fixed w-full bg-white shadow-md transition-all duration-300 z-50"
		: "fixed w-full bg-transparent transition-all duration-300 z-50";

	return (
		<nav className={navbarClasses}>
			<div className='w-full max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
				<div className='text-2xl font-bold text-orange-800'>
					MahaVastu Expert
				</div>
				<div className='space-x-8 hidden md:flex'>
					<Link
						to='/'
						className='text-orange-700 hover:text-orange-900 transition'
					>
						Home
					</Link>
					<a
						href='#services'
						className='text-orange-700 hover:text-orange-900 transition'
					>
						Services
					</a>
					<a
						href='#about'
						className='text-orange-700 hover:text-orange-900 transition'
					>
						About
					</a>
					<a
						href='#contact'
						className='text-orange-700 hover:text-orange-900 transition'
					>
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
