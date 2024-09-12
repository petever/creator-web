'use client'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from '@/app/providers/AuthProvider'

export function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <html lang="ko">
      <Head>
        <meta name="viewport" content="width=device-width, initial-width=1.0" />
      </Head>
      <body>
        <AuthProvider>
          <MantineProvider defaultColorScheme="dark">
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
          </MantineProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
