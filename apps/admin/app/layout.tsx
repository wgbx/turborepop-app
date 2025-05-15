import type { Metadata } from 'next'
import './globals.css'
import { titleKeys } from 'constant'
import ClientProvider from '@admin/components/Provider/ClientProvider'

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
      <body id="root">
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  )
}
