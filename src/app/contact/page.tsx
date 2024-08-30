import Image from "next/image";

export default function Contact() {
	return (
		<>
			<div className='max-w-screen-xl p-4 mx-auto pt-16 w-full'>
				<h1 className='text-4xl mb-5'>Contact</h1>
				<p className='text-base mb-5'>
					You can contact me by email*. <br /> <br /> * Please note that the address is provided in
					an image to help prevent spam.
				</p>
				<Image src='/protected-contact.png' width={320} height={67} alt='Contact' />
			</div>
		</>
	);
}
