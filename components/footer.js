import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 items-center py-8 my-4 border-t border-t-gray-200 dark:border-t-gray-800 font-mono">
            <div>&copy; 2025 ChaCha's Blog</div>
            <a href="https://x.com/ChaCha1785529">
                <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />
            </a>
        </footer>
    )
}