import H1 from "@/components/h1";
import { getPosts } from "@/lib/posts";
import Link from "next/link";


export default async function Home() {
  const { posts } = await getPosts({
              newest: 'newest',
              limit: 3,
          })
  return (
    <>
      <section className="mb-8">
        <H1>
          <div className="flex justify-center">ChaChaのブログへようこそ!</div>
        </H1>
        <H1>最近の記事</H1>

         <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {posts.map(post =>(
                        <li key={post.slug}>
                              <Link href={`/blog/${post.slug}`}className='text-gray-800 dark:text-gray-200'>{post.frontmatter.title}</Link>
                              <div className='text-gray-400 text-sm mt-2'>{post.frontmatter.date}</div>
                        </li>
                    ))}
                </ul>
      </section>
    </>
  );
}
