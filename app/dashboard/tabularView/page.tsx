async function getPosts(): Promise<Array<object>> {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();

	return data;
}

export default async function Page() {
	// Fetch data directly in a Server Component
	const recentPosts = await getPosts();
	// Forward fetched data to your Client Component

	return (
		<div className='text-center leading-10'>
			<table className='border-2 border-black'>
				<thead className='border-2 border-black'>
					<tr className='border-2 border-black'>
						<td className='border-2 border-black'>User Id</td>
						<td className='border-2 border-black'>Id</td>
						<td className='border-2 border-black'>Title</td>
						<td className='border-2 border-black'>Body</td>
					</tr>
				</thead>
				<tbody className='border-2 border-black'>
					{recentPosts.map((post) => (
						<tr key={post.id} className='border-2 border-black'>
							<td className='border-2 border-black'>{post.userId}</td>
							<td className='border-2 border-black'>{post.id}</td>
							<td className='border-2 border-black'>{post.title}</td>
							<td className='border-2 border-black'> {post.body}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
