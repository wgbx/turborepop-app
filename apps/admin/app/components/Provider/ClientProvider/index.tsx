'use client'

import { ReactNode } from 'react'
import QueryProvider from '@admin/components/Provider/QueryProvider'
import { ThemeProvider } from 'ui'

export default function ClientProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  )
}
