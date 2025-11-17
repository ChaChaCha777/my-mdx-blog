import { getPost as getPostNotCached } from '@/lib/posts'
import Link from 'next/link'
import { cache } from 'react'

const getPost = cache(
    async (slug) => await getPostNotCached(slug)
)

export async function generateMetadata({ params }, parent) {
    const { slug } = await params 
    const { frontmatter } = await getPost(slug)
    return frontmatter
}


export default async function BlogPage({ params }) {
    const { slug } = await params
    
    let post
    
    post = await getPost(slug)

    return (
        <article className="prose dark:prose-invert">
            <div className='flex space-x-2 mb-8'>
                {post.frontmatter.tags.map(tag => <Link key={tag} href={`/blog/?tags=${tag}`} className='dark:text-gray-400 text-gray-500'>#{tag}</Link>)}
            </div>
            {post.content}
        </article>
    )
}


