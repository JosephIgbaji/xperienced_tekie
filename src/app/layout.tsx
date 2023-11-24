import type { Metadata } from 'next'
import './globals.css'
import PrimaryNavbar from './components/PrimaryNavbar'



export const metadata: Metadata = {
  title: 'Xperienced Tekie',
  description: 'Tech Internships for young talents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <PrimaryNavbar />
        {children}
        </body>
    </html>
  )
}
