'use client'

export default function Pagination({ pageCount }) {
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <ul className="flex justify-center space-x-4 font-mono text-lg">
            {pages.map(pageNumber => {
                return (<li key={pageNumber}>
                    <Link href={`/blog?page=${pageNumber}`}>{pageNumber}</Link>
                </li>)
            })}
        </ul>
    )
}