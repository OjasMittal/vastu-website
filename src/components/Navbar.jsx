import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
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

				{/* Desktop Nav */}
				<div className='space-x-8 hidden md:flex'>
					<a
						href='#'
						className='inline-block px-4 py-2 text-orange-800 font-semibold bg-transparent rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-orange-200 hover:shadow-lg'
					>
						Home
					</a>

					<a
						href='/#services'
						className='inline-block px-4 py-2 text-orange-800 font-semibold bg-transparent rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-orange-200 hover:shadow-lg'
					>
						Services
					</a>
					<a
						href='/#about'
						className='inline-block px-4 py-2 text-orange-800 font-semibold bg-transparent rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-orange-200 hover:shadow-lg'
					>
						About
					</a>
					<a
						href='/media'
						className='inline-block px-4 py-2 text-orange-800 font-semibold bg-transparent rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-orange-200 hover:shadow-lg'
					>
						Vastu Tips
					</a>
					<a
						href='/#contact'
						className='inline-block px-4 py-2 text-orange-800 font-semibold bg-transparent rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-orange-200 hover:shadow-lg'
					>
						Contact
					</a>
				</div>

				{/* Mobile Menu Button */}
				<div className='md:hidden'>
					<button onClick={() => setMenuOpen(!menuOpen)}>
						{menuOpen ? (
							<X className='text-orange-800' />
						) : (
							<Menu className='text-orange-800' />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Nav Dropdown */}
			{menuOpen && (
				<div className='md:hidden bg-white shadow-md px-6 py-4 space-y-4'>
					<Link
						to='/'
						onClick={() => setMenuOpen(false)}
						className='block text-orange-700'
					>
						Home
					</Link>
					<a
						href='/#services'
						onClick={() => setMenuOpen(false)}
						className='block text-orange-700'
					>
						Services
					</a>
					<a
						href='/#about'
						onClick={() => setMenuOpen(false)}
						className='block text-orange-700'
					>
						About
					</a>
					<a
						href='/media'
						onClick={() => setMenuOpen(false)}
						className='block text-orange-700'
					>
						Vastu Tips
					</a>
					<a
						href='/#contact'
						onClick={() => setMenuOpen(false)}
						className='block text-orange-700'
					>
						Contact
					</a>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
