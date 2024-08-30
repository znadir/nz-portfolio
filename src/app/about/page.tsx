import Image from "next/image";

function LangCard({
	tooltipText,
	children,
	purple,
}: Readonly<{
	tooltipText: string;
	children: React.ReactNode;
	purple?: boolean;
}>) {
	return (
		<div
			className={`py-4 w-28 md:w-48 border flex items-center justify-center rounded-lg relative group
                 ${purple ? "border-purple-400" : "border-blue-600"}
                 `}
		>
			{children}

			<span className='absolute rounded bg-white p-1 text-base font-medium text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-0 right-0'>
				{tooltipText}
			</span>
		</div>
	);
}
export default function About() {
	return (
		<>
			<div className='max-w-screen-xl p-4 mx-auto pt-16 w-full'>
				<h1 className='text-4xl mb-5'>
					Who I <span className='text-blue-600'>am</span>
				</h1>
				<p className='text-base'>
					Hello! I am Nadir Zebiri from Montreal, Quebec. &#128075;
					<br />I am currently a student of Bois-de-Boulogne and looking for an internship in
					Software engineering field.
				</p>
				<h2 className='text-3xl mt-8 mb-5'>Languages I know</h2>
				<div className='flex flex-wrap gap-4'>
					<LangCard tooltipText='Python'>
						<Image src='/icons/python.svg' width={51} height={51} alt='Python' />
					</LangCard>
					<LangCard tooltipText='NodeJs'>
						<Image src='/icons/nodejs.svg' width={45} height={51} alt='Nodejs' />
					</LangCard>
					<LangCard tooltipText='C#'>
						<Image src='/icons/csharp.svg' width={44} height={51} alt='C#' />
					</LangCard>
					<LangCard tooltipText='Java'>
						<Image src='/icons/java.svg' width={39} height={51} alt='java' />
					</LangCard>
					<LangCard tooltipText='Typescript'>
						<Image src='/icons/typescript.svg' width={51} height={51} alt='Typescript' />
					</LangCard>
					<LangCard tooltipText='SQL'>
						<Image src='/icons/sql.svg' width={39} height={51} alt='SQL' />
					</LangCard>
					<LangCard tooltipText='Kotlin'>
						<Image src='/icons/kotlin.svg' width={51} height={51} alt='Kotlin' />
					</LangCard>
					<LangCard tooltipText='Sass'>
						<Image src='/icons/sass.svg' width={68} height={51} alt='Sass' />
					</LangCard>
					<LangCard tooltipText='HTML'>
						<Image src='/icons/html.svg' width={45} height={53} alt='HTML' />
					</LangCard>
					<LangCard tooltipText='CSS'>
						<Image src='/icons/css.svg' width={44} height={51} alt='CSS' />
					</LangCard>
					<LangCard tooltipText='Javascript'>
						<Image src='/icons/javascript.svg' width={51} height={51} alt='Javascript' />
					</LangCard>
				</div>
				<h2 className='text-3xl mt-8 mb-5'>Technologies I use</h2>
				<div className='flex flex-wrap gap-4'>
					<LangCard tooltipText='React'>
						<Image src='/icons/react.svg' width={59} height={51} alt='React' />
					</LangCard>
					<LangCard tooltipText='Next.js'>
						<Image src='/icons/nextjs.svg' width={51} height={51} alt='NextJs' />
					</LangCard>
					<LangCard tooltipText='Flask'>
						<Image src='/icons/flask.svg' width={58} height={51} alt='Flask' />
					</LangCard>
					<LangCard tooltipText='Tailwind'>
						<Image src='/icons/tailwind.svg' width={51} height={51} alt='Tailwind' />
					</LangCard>
					<LangCard tooltipText='Boostrap'>
						<Image src='/icons/boostrap.svg' width={64} height={51} alt='Boostrap' />
					</LangCard>
					<LangCard tooltipText='Linux'>
						<Image src='/icons/linux.svg' width={51} height={51} alt='Linux' />
					</LangCard>
					<LangCard tooltipText='MongoDB'>
						<Image src='/icons/mongodb.svg' width={51} height={51} alt='MongoDB' />
					</LangCard>
					<LangCard tooltipText='MySQL'>
						<Image src='/icons/mysql.svg' width={50} height={49} alt='MySQL' />
					</LangCard>
				</div>
				<h2 className='text-3xl mt-8 mb-5'>Tools I use</h2>
				<div className='flex flex-wrap gap-4'>
					<LangCard tooltipText='Git' purple>
						<Image src='/icons/git.svg' width={51} height={51} alt='Git' />
					</LangCard>
					<LangCard tooltipText='VS Code' purple>
						<Image src='/icons/vscode.svg' width={52} height={52} alt='Vscode' />
					</LangCard>
					<LangCard tooltipText='Visual Studio' purple>
						<Image src='/icons/visualstudio.svg' width={52} height={52} alt='Visual Studio' />
					</LangCard>
					<LangCard tooltipText='Figma' purple>
						<Image src='/icons/figma.svg' width={34} height={51} alt='Figma' />
					</LangCard>

					<LangCard tooltipText='Postman' purple>
						<Image src='/icons/postman.svg' width={51} height={51} alt='Postman' />
					</LangCard>
				</div>
			</div>
		</>
	);
}
