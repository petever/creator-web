import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Sidebar } from '@/widgets/Sidebar'
import { ThemeToggleButton } from '@/widgets/ThemeToggleButton'
import AuthProvider from '@/app/providers/AuthProvider'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <AuthProvider>
          <MantineProvider defaultColorScheme="dark">
            <ThemeToggleButton />
            <Sidebar isLogin={false} />
            {/*<MSWComponent />*/}
            {children}
          </MantineProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
