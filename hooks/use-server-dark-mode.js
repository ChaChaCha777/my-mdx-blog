import { cookies } from "next/headers"

const useServerDarkMode = async(defalutTheme = 'dark') => {
    const cookieStore = await cookies();
    return cookieStore.get('theme')?.value ?? defalutTheme
}

export default useServerDarkMode