import '@mantine/core/styles.css'
import Head from 'next/head'
import AuthProvider from '@/app/providers/AuthProvider'
import { getServerSession } from 'next-auth'
import CustomMantineProvider from '@/app/providers/CustomMantineProvider'

interface RootLayoutProps {
  children: React.ReactNode
  params: any
}

export async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession()

  return (
    <html lang="ko">
      <Head>
        <meta name="viewport" content="width=device-width, initial-width=1.0" />
      </Head>
      <body>
        <AuthProvider session={session}>
          <CustomMantineProvider>{children}</CustomMantineProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
