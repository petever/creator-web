import '@mantine/core/styles.css'
import Head from 'next/head'
import AuthProvider from '@/app/providers/AuthProvider'
import CustomMantineProvider from '@/app/providers/CustomMantineProvider'
import QueryProvider from '@/app/providers/QueryProvider'
import LocaleProvider from "@/app/providers/LocaleProvider";

interface RootLayoutProps {
  children: React.ReactNode
  params: any
}

export async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <Head>
        <meta name="viewport" content="width=device-width, initial-width=1.0" />
      </Head>
      <body>
        <AuthProvider>
          <QueryProvider>
            <CustomMantineProvider>
              <LocaleProvider>
                {children}
              </LocaleProvider>
            </CustomMantineProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
