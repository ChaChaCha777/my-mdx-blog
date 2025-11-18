'use client'

import { useTheme } from "next-themes"
import { useState, useEffect } from "react";

export default function DarkMode() {
    const { resolvedTheme, setTheme } = useTheme();
    
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button onClick={() => {
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
        }}>
            {resolvedTheme === 'light' ?  '🌙': '☀️'}
        </button>
    )
}