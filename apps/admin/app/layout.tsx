import type { Metadata } from 'next'
import './globals.css'
import { titleKeys } from 'constant'

export const metadata: Metadata = {
  title: {
    template: '',
    default: titleKeys.DEFAULT,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
