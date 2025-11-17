import { cookies as getCookies} from "next/headers"

const useServerDarkMode = async (defalutTheme = 'dark') => {
    const cookieStore = await getCookies()
    return cookieStore.get('theme')?.value ?? defalutTheme
}

export default useServerDarkMode