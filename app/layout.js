import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChaCha's Blog",
  description: "ChaChaのブログ",
};

export default async function RootLayout({ children }) {
  return (
    <>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" rel="stylesheet" />
        </head>
        <html lang="ja" suppressHydrationWarning>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
              <ThemeProvider attribute="class">
                <Header />
                <main className="mt-12">
                  {children}
                </main>
                <footer className="flex justify-center py-8 my-4 border-t border-t-gray-200 dark:border-t-gray-800 font-mono">
                  &copy; 2025 ChaCha's Blog
                </footer>
              </ThemeProvider>
          </body>
        </html>
    </>
  );
}
