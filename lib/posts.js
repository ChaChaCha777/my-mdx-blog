import fs from 'fs'
import path from 'path'
import H1 from '@/components/h1'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'


export function loadPost(slug) {
    const filename = slug.endsWith('.mdx') ? slug : `${slug}.mdx`

    return fs.readFileSync(
        path.join(process.cwd(), 'content', filename)
    )
}

export async function getPost(slug) {
    const source = loadPost(slug)

    const { content, frontmatter } = await compileMDX({
        source,
        components: {
        h1: (props) => <H1 {...props} />,
        },
        options: {
        parseFrontmatter: true,
        mdxOptions: {
            remarkPlugins: [
            remarkGfm,
            remarkMath,
            ],
            rehypePlugins: [
            rehypeKatex,
            ],
            format: 'mdx',
        },
        },
    })

    return {content, frontmatter}
}

export async function getPosts({
    newest = true,
    page = 1, 
    limit = 2, 
    tags
} = {}) {
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

    let filteredPosts = posts

    if (tags) {
        filteredPosts = filteredPosts.filter(
            post => post.frontmatter.tags.some(
                tag => tags.includes(tag)
            )
        )
    }

    if (newest) {
        filteredPosts.sort(
            (a, b) => {
                const dateA = new Date(a.frontmatter.date)
                const dateB = new Date(b.frontmatter.date)

                return dateB - dateA
            }
        )
    }
    else {
        filteredPosts.sort(
            (a, b) => {
                const dateA = new Date(a.frontmatter.date)
                const dateB = new Date(b.frontmatter.date)

                return dateA - dateB
            }
        )
    }

    const startIndex = (page - 1) * limit
    const endIndex = page * limit


    return {
        posts: filteredPosts.slice(startIndex, endIndex),
        pageCount: Math.ceil(filteredPosts.length / limit)
    }
}


export async function getTags() {
    const files = fs.readdirSync(
        path.join(
            process.cwd(), 'content'
        )
    )
    
    const posts = await Promise.all(files.map(async filename => {
        const { frontmatter } = await getPost(filename)

        return {
            frontmatter,
        }
    }))

    let arrayTags = []
    posts.map((post) => {
        const tags = post.frontmatter.tags
        arrayTags = [...arrayTags, ...tags]

        return arrayTags
    })

    const setTags = [...new Set(arrayTags)]
    return setTags.sort()
}