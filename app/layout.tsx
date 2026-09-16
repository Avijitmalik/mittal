import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mittal Industrial Tools — Precision Tooling Solutions',
  description:
    'Mittal Industrial Tools — a trusted industrial tooling and machining solutions company based in Rohtak, Haryana, India. Carbide drills, endmills, CNC tool holders, grinding wheels and more.',
  keywords: 'industrial tools, carbide drills, endmills, CNC tool holders, boring bars, grinding wheels, Rohtak, Haryana, India',
  openGraph: {
    title: 'Mittal Industrial Tools',
    description: 'Precision Industrial Tooling Solutions Engineered for Performance.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background" data-scroll-behavior="smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
