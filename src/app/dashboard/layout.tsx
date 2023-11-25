import type { Metadata } from 'next'
import { ClerkProvider } from "@clerk/nextjs";
import '../globals.css'
import DashboardNavbar from '../components/DashboardNavbar'



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
    <ClerkProvider >
      <html lang="en">
        <body className="container mx-auto">
          <DashboardNavbar />
          {children}
          </body>
      </html>
    </ClerkProvider>
  )
}
