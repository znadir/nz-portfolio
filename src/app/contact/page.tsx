import Image from "next/image";
import { Metadata } from "next";
import Container from "../components/container";

export const metadata: Metadata = {
	title: "Contact - ZNadir",
	description:
		"Contact me by email. Please note that the address is provided in an image to help prevent spam.",
};

export default function Contact() {
	return (
		<>
			<Container>
				<h1 className='text-4xl mb-5'>Contact</h1>
				<p className='text-base mb-5'>
					You can contact me by email*. <br /> <br /> * Please note that the address is provided in
					an image to help prevent spam.
				</p>
				<Image src='/protected-contact.png' width={320} height={67} alt='Contact' />
			</Container>
		</>
	);
}
