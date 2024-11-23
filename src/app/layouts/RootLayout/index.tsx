import './normalize.css'
import './globals.css'
import AuthProvider from '@/app/providers/AuthProvider'
import QueryProvider from '@/app/providers/QueryProvider'
import LocaleProvider from '@/app/providers/LocaleProvider'
import {Header} from "@/shared/ui/header";
import {HeaderNavigation} from "@/shared/ui/HeaderNavigation";

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
        <meta name="viewport" content="width=device-width, initial-width=1.0" />
        <title>슈슈슉</title>
      </head>
      <body>
        <AuthProvider>
          <QueryProvider>
						<LocaleProvider>
							{children}
						</LocaleProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
