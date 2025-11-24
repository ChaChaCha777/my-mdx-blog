import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from "@/components/footer";
config.autoAddCss = false

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
                <Footer />
              </ThemeProvider>
          </body>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
            )}
          { console.log("GA ID:", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) }
        </html>
    </>
  );
}
