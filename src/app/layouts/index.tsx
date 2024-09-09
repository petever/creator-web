'use client'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Sidebar } from '@/widgets/Sidebar/ui'
import { ThemeToggleButton } from '@/widgets/ThemeToggleButton/ui'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import classes from './layout.module.css'

export function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <html lang="ko">
      <Head>
        <meta name="viewport" content="width=device-width, initial-width=1.0" />
      </Head>
      <body>
        <MantineProvider defaultColorScheme="dark">
          <QueryClientProvider client={queryClient}>
            <ThemeToggleButton />
            <Sidebar />
            {/*<MSWComponent />*/}
						<div className={classes.wrap}>
							{children}
						</div>
          </QueryClientProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
