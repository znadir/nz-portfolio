"use client";
import { TypeAnimation } from "react-type-animation";

function IconBtn({ href, svgIcon }: { href: string; svgIcon: JSX.Element }) {
	return (
		<a href={href} target='_blank' className='bg-gray-600 p-2 rounded-full'>
			{svgIcon}
		</a>
	);
}

export default function Home() {
	return (
		<>
			<style jsx global>{`
				body {
					background-image: url("/coding-bg.png");
					background-size: cover;
					background-attachment: fixed;
				}
			`}</style>

			<div className='max-w-screen-xl p-4 mx-auto py-32 md:py-48 w-full'>
				<h1 className='text-5xl md:text-6xl text-blue-600'>Nadir Zebiri</h1>
				<div className='text-2xl md:text-3xl my-5 md:my-8'>
					<TypeAnimation
						sequence={[
							"I am developer",
							1000,
							"I am a designer",
							1000,
							"I love coding",
							1000,
							"I am a student",
							1000,
							"I appreciate clean code",
							1000,
							"I follow best practices",
							1000,
						]}
						speed={50}
						repeat={Infinity}
					/>
				</div>
				<div className='flex space-x-4'>
					<IconBtn
						href='https://github.com/znadir'
						svgIcon={
							<svg
								width='30'
								height='30'
								viewBox='0 0 30 30'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M15 0C23.2845 0 30 6.88489 30 15.3794C30 22.1729 25.707 27.9359 19.7505 29.9714C18.99 30.1229 18.72 29.6426 18.72 29.2331C18.72 28.7261 18.738 27.0702 18.738 25.0122C18.738 23.5782 18.258 22.6423 17.7195 22.1653C21.06 21.7843 24.57 20.4836 24.57 14.5766C24.57 12.8966 23.988 11.5257 23.025 10.4487C23.181 10.0602 23.6955 8.49592 22.878 6.37792C22.878 6.37792 21.621 5.96583 18.7575 7.95482C17.559 7.61433 16.275 7.443 15 7.437C13.725 7.443 12.4425 7.61433 11.2455 7.95482C8.379 5.96583 7.119 6.37792 7.119 6.37792C6.3045 8.49592 6.819 10.0602 6.9735 10.4487C6.015 11.5257 5.4285 12.8966 5.4285 14.5766C5.4285 20.4686 8.931 21.7892 12.2625 22.1777C11.8335 22.5617 11.445 23.2391 11.31 24.2336C10.455 24.6266 8.283 25.3068 6.945 22.9563C6.945 22.9563 6.1515 21.4786 4.6455 21.3706C4.6455 21.3706 3.183 21.3512 4.5435 22.3052C4.5435 22.3052 5.526 22.7777 6.2085 24.5551C6.2085 24.5551 7.089 27.3001 11.262 26.3701C11.2695 27.6556 11.283 28.8671 11.283 29.2331C11.283 29.6396 11.007 30.1154 10.2585 29.9729C4.2975 27.9404 0 22.1744 0 15.3794C0 6.88489 6.717 0 15 0Z'
									fill='white'
								/>
							</svg>
						}
					/>
					<IconBtn
						href='https://www.linkedin.com/in/nadir-zebiri-a56711261/'
						svgIcon={
							<svg
								width='30'
								height='30'
								viewBox='0 0 30 30'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M15 0C6.71484 0 0 6.71484 0 15C0 23.2852 6.71484 30 15 30C23.2852 30 30 23.2852 30 15C30 6.71484 23.2852 0 15 0ZM10.8047 21.2754H7.88086V11.918H10.8047V21.2754ZM9.26367 10.7461H9.24023C8.17969 10.7461 7.49414 10.0313 7.49414 9.12305C7.49414 8.19727 8.20312 7.5 9.28125 7.5C10.3594 7.5 11.0215 8.19727 11.0449 9.12305C11.0508 10.0254 10.3652 10.7461 9.26367 10.7461ZM22.5 21.2754H19.1836V16.4355C19.1836 15.1699 18.668 14.3027 17.5254 14.3027C16.6523 14.3027 16.166 14.8887 15.9434 15.4512C15.8613 15.6504 15.873 15.9316 15.873 16.2188V21.2754H12.5859C12.5859 21.2754 12.627 12.6973 12.5859 11.918H15.873V13.3887C16.0664 12.7441 17.1152 11.8301 18.791 11.8301C20.8711 11.8301 22.5 13.1777 22.5 16.0723V21.2754Z'
									fill='white'
								/>
							</svg>
						}
					/>
				</div>
			</div>
		</>
	);
}
