//libs
import Link from "next/link";

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

			<div className='bg-blue-100 p-3 '>
				<div className='flex flex-row justify-end '>
					<div className='flex flex-row gap-3'>
						<div className='bg-opacity-30 bg-purple-400 px-2'>
							Render #{renderCount}
						</div>
						<code className='bg-opacity-30 bg-purple-400 px-2'>
							app/dashboard/layout
						</code>
					</div>
				</div>

				<div className='h-full'>
					<nav className='flex flex-row justify-start -mx-3 border-b-2 border-purple-400'>
						<div className='bg-opacity-30 bg-purple-400 p-3 hover:bg-opacity-100 hover:cursor-pointer'>
							<Link href='/dashboard/tabularView'>Tabular View</Link>
						</div>
						<div className='bg-opacity-30 bg-purple-400 p-3 hover:bg-opacity-100 hover:cursor-pointer'>
							<Link href='/dashboard/graphicalView'>Graphical View</Link>
						</div>
					</nav>
					{children}
				</div>
			</div>
		</section>
	);
}

export const metadata = {
	title: "Dashboard Page", //this overrides the parent layout's metadata
};

// export async function generateMetadata({ params, searchParams }) {
//   return { title: 'Next.js' };
// }
