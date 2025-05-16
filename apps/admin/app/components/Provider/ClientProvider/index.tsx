'use client'

import { ReactNode } from 'react'
import QueryProvider from '@admin/components/Provider/QueryProvider'
import { ThemeProvider } from 'ui'
import '@ant-design/v5-patch-for-react-19'

export default function ClientProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  )
}
