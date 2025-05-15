'use client'

import { ReactNode } from 'react'
import QueryProvider from '@admin/components/Provider/QueryProvider'

export default function ClientProvider({ children }: { children: ReactNode }) {
  return <QueryProvider>{children}</QueryProvider>
}
