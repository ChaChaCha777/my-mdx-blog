import { getPost as getPostNotCached } from '@/lib/posts'
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
            {post.content}
        </article>
    )
}


