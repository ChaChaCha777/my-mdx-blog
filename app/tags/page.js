import Card from "@/components/card";
import H1 from "@/components/h1";
import { getTags } from "@/lib/posts";
import Link from "next/link";

export default async function TagsPage() {
    const tags = await getTags()
    return (
        <>
            <H1>タグ一覧</H1>
            <Card>
                <ul className="flex flex-wrap gap-4">
                    { tags.map((tag) => {
                        return (
                        <li key={tag} className="text-gray-500 dark:text-gray-400 hover:bg-gray-200">
                            <Link href={`/blog?tags=${tag}`}>#{tag}</Link>
                        </li>
                        )
                    })}
                </ul>
            </Card>
        </>
        
    )
}