"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const pathName = usePathname();

	if (pathName === "/") {
		return null;
	}

	return (
		<footer className='rounded-lg shadow bg-gray-900 mt-7'>
			<div className='w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between'>
				<span className='text-sm sm:text-center text-gray-400'>
					© 2023-{currentYear} Nadir Zebiri. All Rights Reserved.
				</span>
				<ul className='flex flex-wrap items-center text-sm font-medium text-gray-400'>
					<li>
						<a href='/about' className='hover:underline me-4 md:me-6'>
							About
						</a>
					</li>
					<li>
						<a href='/contact' className='hover:underline'>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
