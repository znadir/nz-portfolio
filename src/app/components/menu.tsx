"use client";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const links = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/projects", label: "Projects" },
		{ href: "/contact", label: "Contact" },
	];

	const isPageHref = (href: string) => {
		return window.location.pathname === href;
	};

	return (
		<>
			<nav>
				<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
					<Link href='/'>
						<span className='text-3xl font-semibold'>NZ</span>
					</Link>
					<button
						type='button'
						className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:text-blue-50'
						onClick={() => toggleMenu()}
					>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='w-5 h-5'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 17 14'
						>
							<path
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M1 1h15M1 7h15M1 13h15'
							/>
						</svg>
					</button>
					<div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
						<ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0'>
							{links.map(({ href, label }) => (
								<li key={href}>
									<a
										href={href}
										className={`block py-2 px-3 rounded md:border-0 md:hover:text-blue-600 md:p-0    ${
											isPageHref(href)
												? "bg-blue-600 md:bg-transparent md:text-blue-600 underline"
												: "hover:bg-gray-500 md:hover:bg-transparent"
										}`}
									>
										{label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
