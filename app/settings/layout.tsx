// On navigation, layouts preserve state, remain interactive, and do not re-render
let renderCount: number = 0;

export default function SettingsLayout({
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
							app/dashboard/settings
						</code>
					</div>
				</div>

				<div className='h-full'>{children}</div>
			</div>
		</section>
	);
}

export const metadata = {
	title: "Settings Page", //this overrides the parent layout's metadata
};
