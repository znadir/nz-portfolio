export default function Container({ children }: { children: React.ReactNode }) {
	return <div className='max-w-screen-xl p-4 mx-auto pt-8 md:pt-16 w-full'>{children}</div>;
}
