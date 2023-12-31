import type { Metadata } from 'next'
import { ClerkProvider } from "@clerk/nextjs";
import './globals.css'
import PrimaryNavbar from './components/PrimaryNavbar'
import Footer from './components/footer/Footer';



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
    <ClerkProvider>
      <html lang="en">
        <body className="container mx-auto max-w-full">
          <PrimaryNavbar />
          {children}
          <Footer />
          </body>
      </html>
    </ClerkProvider>
  )
}
