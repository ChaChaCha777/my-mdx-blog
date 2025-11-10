async function BlogPage({ params }) {
    const { slug } = await params;
    return (
        <>
        Hello { slug }
        </>
    )
}

export default BlogPage