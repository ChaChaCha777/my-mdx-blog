import Link from "next/link"

function Header() {
    return (
        <header> 
          どのページにも見える
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </header>
    )
}

export default Header