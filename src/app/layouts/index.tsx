'use client'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Sidebar } from '@/widgets/Sidebar/ui'
import { ThemeToggleButton } from '@/widgets/ThemeToggleButton/ui'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import classes from './styles.module.css'
import AuthProvider from '@/app/providers/AuthProvider'

export function RootLayout({children}: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <html lang="ko">
    <Head>
      <meta name="viewport" content="width=device-width, initial-width=1.0"/>
    </Head>
    <body>
    <AuthProvider>
      <MantineProvider defaultColorScheme="dark">
        <QueryClientProvider client={queryClient}>
          <ThemeToggleButton/>
          <div className={classes.wrap}>
            <Sidebar/>
            {/*<MSWComponent />*/}
            {children}
          </div>
        </QueryClientProvider>
      </MantineProvider>
    </AuthProvider>
    </body>
    </html>
  )
}
