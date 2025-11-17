import Card from '@/components/card'
import H1 from '@/components/h1'
import Pagination from '@/components/pagination'
import { getPosts } from '@/lib/posts'
import Link from 'next/link'

export default async function BlogPostPage({ searchParams })
    {
        const { tags:tagString } = await searchParams
        const { order = 'newest' } = await searchParams
        const { page = 1 } = await searchParams
        const { limit = 8 } = await searchParams
       
        const tags = tagString?.split('.')
        const { posts, pageCount } = await getPosts({
            tags,
            newest: order === 'newest',
            page,
            limit
        })
        return (
            <>
                <H1>#{tagString}&nbsp;の記事一覧</H1>
                <hr />

                <div className='mb-8'>
                    {order == 'newest' && <Link href="/blog?order=oldest" className="underline">古い順</Link>}
                    {order == 'oldest' && <Link href="/blog?order=newest" className="underline">新しい順</Link>}
                    &nbsp;に表示する
                </div>

                <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {posts.map(post =>(
                        <li key={post.slug}>
                            <Card>
                                <Link href={`/blog/${post.slug}`}className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>{post.frontmatter.title}</Link>
                                <div className='text-gray-400 text-sm mt-2'>{post.frontmatter.date}</div>
                            </Card>
                        </li>
                    ))}
                </ul>

                <div className='mt-8'>
                    <Pagination pageCount={pageCount} />
                </div>
            </>
        )
}