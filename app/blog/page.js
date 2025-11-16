import fs from 'fs'
import path from 'path'
import { getPost } from '@/lib/posts'
import Link from 'next/link'

export default async function BlogPostPage() {
    const files = fs.readdirSync(
        path.join(
            process.cwd(), 'content'
        )
    )
    
    const posts = await Promise.all(files.map(async filename => {
        const {frontmatter} = await getPost(filename)

        return {
            frontmatter,
            slug: filename.replace('.mdx', '')
        }
    }))

    console.log(posts)
    return (
        <>
            <h1 className='mb-8 text-xl'>最近の投稿</h1>

            <div className='text-lg text-gray-600 dark:text-gray-400 mb-8'>
                最近の投稿をチェックする。
            </div>

            <hr />

            <ul className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {posts.map(post =>(
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>{post.frontmatter.title}</Link>
                        <div className='text-gray-400 text-sm mt-2'>{post.frontmatter.date}</div>
                    </li>
                ))}
            </ul>
        </>
    )
}