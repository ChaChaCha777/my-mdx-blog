import { getPost } from '@/lib/posts'

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
