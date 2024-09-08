import Image from "next/image";
import { Metadata } from "next";
import Container from "../components/container";

export const metadata: Metadata = {
	title: "Projects - ZNadir",
	description:
		"Here are some projects I have done. I mostly work with React, Next.js, and TailwindCSS.",
};

function Project({
	title,
	description,
	imgSrc,
	imgAlt,
	demoLink,
	codeLink,
}: {
	title: string;
	description: string;
	imgSrc: string;
	imgAlt: string;
	demoLink?: string;
	codeLink?: string;
}) {
	return (
		<div className='border border-blue-600 rounded-lg p-4 h-fit'>
			<Image width={685} height={363} src={imgSrc} alt={imgAlt} className='w-full h-auto' />

			<h2 className='text-2xl my-4'>{title}</h2>
			<p className='text-base'>{description}</p>
			{(demoLink || codeLink) && (
				<div className='flex gap-3 mt-4 justify-end'>
					{demoLink && (
						<a
							href={demoLink}
							target='_blank'
							className='inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
						>
							Demo
						</a>
					)}
					{codeLink && (
						<a
							href={codeLink}
							target='_blank'
							className='inline-block px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition'
						>
							Github
						</a>
					)}
				</div>
			)}
		</div>
	);
}

export default function Projects() {
	return (
		<>
			<Container>
				<h1 className='text-4xl mb-5'>My last projects</h1>
				<p className='text-base mb-5'>Here are some projects I have done:</p>

				<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
					<Project
						title='Eco Essentials'
						description=' Shop eco-friendly products, built using Next.js, MUI, Prisma and Redux. This project is under development and is not yet finished.'
						imgSrc='/project-imgs/eco-essentials.png'
						imgAlt='Eco Essentials ss'
						demoLink='https://eco-essentials.vercel.app/'
						codeLink='https://github.com/znadir/EcoEssentials'
					/>
					<Project
						title='Memtube'
						description='Memtube is a simple react app to watch endless Reddit memes like Youtube videos! Please note that some memes may be inappropriate, and I do not endorse them '
						imgSrc='/project-imgs/memtube.png'
						imgAlt='Memtube ss'
						demoLink='https://znadir.github.io/memtube/'
						codeLink='https://github.com/znadir/memtube'
					/>
					<Project
						title='Puffle Roundup'
						description='Club penguin mini game rewritten in javascript. Round up the puffles into the pen as fast as possible to get a lot of points!'
						imgSrc='/project-imgs/puffle-roundup.png'
						imgAlt='Puffle Roundup ss'
						demoLink='https://joegamz.itch.io/puffle-roundup-minigame'
						codeLink='https://github.com/znadir/puffle-roundup'
					/>
					<Project
						title='Impossible Queez'
						description='A simple quiz written in React. There are two categories to the impossible queez, programming and cybersecurity.'
						imgSrc='/project-imgs/impossible-quiz.png'
						imgAlt='Impossible Queez ss'
						demoLink='https://impossible-queez.vercel.app/'
						codeLink='https://github.com/znadir/impossible-queez'
					/>
					<Project
						title='My portfolio'
						description='The website you are currently on! It is a simple portfolio website made with Next.js and Tailwind CSS.'
						imgSrc='/project-imgs/portfolio.png'
						imgAlt='Portfolio ss'
						codeLink='https://github.com/znadir/nz-portfolio'
					/>
				</div>
			</Container>
		</>
	);
}
