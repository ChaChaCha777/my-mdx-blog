import DarkMode from "./dark-mode"
import Navigation from "./navigation"
import Link from "next/link"
import useServerDarkMode from "@/hooks/use-server-dark-mode"

async function Header() {
    const theme = await useServerDarkMode()
    return (
        <header className="flex justify-between md:items-center mt-4 py-4 border-b border-b-gray-200 dark:border-b-gray-800"> 
          <div className="flex items-center md:space-x-12">
            <div className="hidden md:block">
              <Link href="/" className="text-xl font-mono">ChaCha's Blog</Link>
            </div>
            <Navigation />
          </div>
          <DarkMode defaultTheme={theme}/>
        </header>
    )
}

export default Header