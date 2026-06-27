import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { Navbar } from '@/components/layout/Navbar'
import { SearchProvider } from '@/context/SearchContext'
import { Footer } from '@/components/layout/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Casino Lobby — Play Free Online Games',
  description:
    'Discover hundreds of free-to-play casino games, slot machines, and card games. No registration required!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased motion-safe:scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <SearchProvider>
            <Navbar />
            {children}
            <Footer />
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
