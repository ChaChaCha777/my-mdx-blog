import { MDXRemote } from "next-mdx-remote/rsc";
import fs from 'fs'
import path from 'path'

async function BlogPage({ params }) {
    const { slug } = await params
    const markdown = fs.readFileSync(
        path.join(process.cwd(), 'content', `${slug}.mdx`)
    )
    return (
        <article className="prose dark:prose-invert">
            <MDXRemote source={markdown}/>
        </article>
    )
}

export default BlogPage