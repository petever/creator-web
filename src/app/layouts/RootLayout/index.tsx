import '@mantine/core/styles.css'
import './normalize.css'
import Head from 'next/head'
import AuthProvider from '@/app/providers/AuthProvider'
import CustomMantineProvider from '@/app/providers/CustomMantineProvider'
import QueryProvider from '@/app/providers/QueryProvider'
import LocaleProvider from '@/app/providers/LocaleProvider'
import { ColorSchemeScript } from '@mantine/core'

interface RootLayoutProps {
  children: React.ReactNode
  params: any
}

export const metadata = {
  title: '슈슉',
  description: '크리에이터와 팬이 더욱 가까워지는 공간, 슈슉',
}

export async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <Head>
        <meta name="viewport" content="width=device-width, initial-width=1.0" />
        <ColorSchemeScript />
      </Head>
      <body>
        <AuthProvider>
          <QueryProvider>
            <CustomMantineProvider>
              <LocaleProvider>{children}</LocaleProvider>
            </CustomMantineProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
