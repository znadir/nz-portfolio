import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

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
			<body className={kumbh.className}>
				<Menu />
				{children}
			</body>
		</html>
	);
}
