//libs
import Link from "next/link";

//styles
import "./globals.css";

// On navigation, layouts preserve state, remain interactive, and do not re-render
let renderCount: number = 0;

export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	renderCount++;

	return (
		<section>
			{/* Include shared UI here e.g. a header or sidebar */}

			<nav className='flex justify-between py-3 px-2 bg-blue-800 text-white'>
				<div className='flex flex-row gap-3'>
					<div className='bg-opacity-30 bg-purple-400 px-2 hover:bg-opacity-100 hover:cursor-pointer'>
						<Link href='/'>Home</Link>
					</div>
					<div className='bg-opacity-30 bg-purple-400 px-2 hover:bg-opacity-100 hover:cursor-pointer'>
						<Link href='/dashboard'>Dashboard</Link>
					</div>
					<div className='bg-opacity-30 bg-purple-400 px-2 hover:bg-opacity-100 hover:cursor-pointer'>
						<Link href='/settings'>Settings</Link>
					</div>
				</div>

				<div className='flex flex-row gap-3'>
					<div className='bg-opacity-30 bg-purple-400 px-2'>
						Render #{renderCount}
					</div>
					<code className='bg-opacity-30 bg-purple-400 px-2'>app/layout</code>
				</div>
			</nav>

			{children}
		</section>
	);
}

export const metadata = {
	title: "Home Page",
};

// export async function generateMetadata({ params, searchParams }) {
//   return { title: 'Next.js' };
// }
