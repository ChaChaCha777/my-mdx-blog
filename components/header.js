import { theme } from "@/tailwind.config"
import DarkMode from "./dark-mode"
import Navigation from "./navigation"
import Link from "next/link"
import useServerDarkMode from "@/hooks/use-server-dark-mode"

function Header() {
    const theme = useServerDarkMode()
    return (
        <header className="flex justify-between md:items-center mt-4"> 
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