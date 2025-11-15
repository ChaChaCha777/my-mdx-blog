import { MDXRemote } from "next-mdx-remote/rsc";
import { loadPost } from '@/lib/posts'

async function BlogPage({ params }) {
    const { slug } = await params
    
    let markdown
    
    markdown = loadPost(slug)

    return (
        <article className="prose dark:prose-invert">
            <MDXRemote source={markdown}/>
        </article>
    )
}

export default BlogPage