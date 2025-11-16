import fs from 'fs'
import path from 'path'
import { getPost } from '@/lib/posts'

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
            <h1>最近の投稿</h1>
        </>
    )
}