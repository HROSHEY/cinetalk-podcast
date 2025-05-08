import type React from "react"
import type { Metadata } from "next"
import { Inter, Anton, Bebas_Neue, Oswald } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" })
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
})

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  title: "Cinetalk Podcast",
  description: "Podcast de cinema e cultura pop",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${anton.variable} ${bebasNeue.variable} ${oswald.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
