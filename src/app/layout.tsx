import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";
import Footer from "./components/footer";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nadir Zebiri's portfolio",
	description:
		"Hi there! I'm Nadir Zebiri, a developer. This is my portfolio. I mostly work with React, Next.js, and TailwindCSS. I am currently looking for an internship in software engineering.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={kumbh.className}>
				<div className='flex flex-col min-h-screen'>
					<Menu />
					{children}
					<div className='flex-1' />
					{<Footer />}
				</div>
			</body>
		</html>
	);
}
