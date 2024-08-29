import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nadir Zebiri's portfolio",
	description: "Hi there! I'm Nadir Zebiri, a developer.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Menu />
				{children}
			</body>
		</html>
	);
}
