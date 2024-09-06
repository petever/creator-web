import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Sidebar } from '@/widgets/Sidebar'
import { ThemeToggleButton } from '@/widgets/ThemeToggleButton'
import QueryProvider from '@/app/providers/QueryProvider'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <MantineProvider defaultColorScheme="dark">
            <ThemeToggleButton />
            <Sidebar isLogin={false} />
            {/*<MSWComponent />*/}
            {children}
          </MantineProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
