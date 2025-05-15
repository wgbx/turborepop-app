import { ConfigProvider } from 'antd'
import { ReactNode } from 'react'

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {},
      }}
    >
      {children}
    </ConfigProvider>
  )
}
