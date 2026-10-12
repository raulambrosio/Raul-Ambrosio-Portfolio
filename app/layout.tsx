import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Raúl Ambrósio | Dev & Designer Portfolio',
  description:
    'Portfolio of Raúl Ambrósio — a self-taught Graphic Designer and Software Developer based in Luanda, Angola. Pragmatic, beautiful and responsive projects.',
  generator: 'v0.app',
  keywords: [
    'Raúl Ambrósio',
    'Portfolio',
    'Graphic Designer',
    'Software Developer',
    'Angola',
    'Luanda',
    'Web Developer',
  ],
  authors: [{ name: 'Raúl Ambrósio' }],
  openGraph: {
    title: 'Raúl Ambrósio | Dev & Designer Portfolio',
    description:
      'Self-taught Graphic Designer and Software Developer based in Luanda, Angola.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#fe439e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
