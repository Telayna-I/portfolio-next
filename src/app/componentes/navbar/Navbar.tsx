"use client";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

// Navbar.jsx
const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const navigationItems = [
		{ id: 1, label: "Home", href: "#home" },
		{ id: 2, label: "Trabajos", href: "#trabajos" },
		{ id: 3, label: "Proyectos", href: "#proyectos" },
		{ id: 4, label: "Services", href: "#services" },
		{ id: 5, label: "Contact", href: "#contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY;
			setScrolled(offset > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 h-16 transition-all duration-300 ${
				scrolled ? "bg-white shadow-lg border-b" : "bg-transparent"
			}`}
			role='navigation'
			aria-label='Main navigation'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<div className='flex-shrink-0'>
						<span className='font-semibold text-gray-800'>Iñaki Telayna</span>
					</div>

					{/* Desktop Navigation */}
					<div className='hidden md:block'>
						<div className='ml-10 flex items-center space-x-8'>
							{navigationItems.map((item) => (
								<a
									key={item.id}
									href={item.href}
									className='text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200'
									aria-label={item.label}>
									{item.label}
								</a>
							))}
						</div>
					</div>

					{/* Mobile Navigation Button */}
					<div className='md:hidden'>
						<button
							onClick={toggleMenu}
							className='inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors duration-200'
							aria-expanded={isOpen}
							aria-controls='mobile-menu'
							aria-label='Toggle menu'>
							{isOpen ? (
								<HiX className='block h-6 w-6' aria-hidden='true' />
							) : (
								<HiMenu className='block h-6 w-6' aria-hidden='true' />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			<div
				className={`md:hidden transition-all duration-300 ease-in-out ${
					isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
				}`}
				id='mobile-menu'>
				<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white'>
					{navigationItems.map((item) => (
						<a
							key={item.id}
							href={item.href}
							className='block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200'
							aria-label={item.label}>
							{item.label}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
