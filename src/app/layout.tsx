import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

export const metadata: Metadata = {
  title: "CardBot Arena",
  description: "Challenge AI-style bots in Joker and Bura card-game arenas."
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
