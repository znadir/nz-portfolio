"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const pathName = usePathname();

	if (pathName === "/") {
		return null;
	}

	return (
		<footer className='rounded-lg shadow bg-gray-950 mt-7'>
			<div className='w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row items-center justify-between'>
				<span className='text-sm text-gray-400'>
					© 2023-{currentYear} Nadir Zebiri. All Rights Reserved.
				</span>
				<ul className='flex flex-wrap items-center text-sm font-medium text-gray-400'>
					<li>
						<Link href='/about' className='hover:underline me-4 md:me-6'>
							About
						</Link>
					</li>
					<li>
						<Link href='/contact' className='hover:underline'>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}
