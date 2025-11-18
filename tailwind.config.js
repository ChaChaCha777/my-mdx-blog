module.exports = {
    darkMode: "class", 
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
     ],
    theme: {
        extend: {
        },
        hljs: {
            theme: "github-dark",
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require("tailwind-highlightjs"),
    ],
    safelist: [
    {
      pattern: /hljs+/,
    },
  ],
}
