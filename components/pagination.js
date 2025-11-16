'use client'
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

export default function Pagination({ pageCount }) {
    const searchParams = useSearchParams()
    const pathName = usePathname()

    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const params = new URLSearchParams(searchParams)
    const currentPage = Number(params.get('page') ?? "1")

    return (
        <ul className="flex justify-center space-x-4 font-mono text-lg">
            {pages.map(pageNumber => {
                params.set('page', pageNumber.toString())
                
                if (pageNumber == currentPage) {
                    return (
                    <li key={pageNumber} className="px-4 rounded bg-gray-200 dark:bg-gray-600">
                        <Link href={`${pathName}?${params.toString()}`}>
                        {pageNumber}
                        </Link>
                    </li>
                    )
                }
                else {
                    return (
                    <li key={pageNumber}>
                        <Link href={`${pathName}?${params.toString()}`}>
                        {pageNumber}
                        </Link>
                    </li>
                    )
                }
            })}
        </ul>
    )
}