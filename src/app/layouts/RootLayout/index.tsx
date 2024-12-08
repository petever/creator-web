import './normalize.css'
import './globals.css'
import AuthProvider from '@/app/providers/AuthProvider'
import QueryProvider from '@/app/providers/QueryProvider'
import LocaleProvider from '@/app/providers/LocaleProvider'
import { Toaster } from '@/shared/ui/toaster'

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
    <head>
      <link rel="apple-touch-icon" sizes="57x57" href="/assets/favicon/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/assets/favicon/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicon/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicon/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicon/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicon/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicon/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicon/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/assets/favicon/manifest.json"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/assets/favicon/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"/>
      <meta name="viewport" content="width=device-width, initial-width=1.0"/>
      <title>슈슈슉</title>
    </head>
    <body>
    <AuthProvider>
      <QueryProvider>
        <LocaleProvider>{children}</LocaleProvider>
      </QueryProvider>
    </AuthProvider>
    <Toaster/>
    </body>
    </html>
  )
}
