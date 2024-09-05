import { Flex, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Sidebar } from '@/widgets/Sidebar'
import { ThemeToggleButton } from '@/widgets/ThemeToggleButton'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <MantineProvider defaultColorScheme="dark">
          <ThemeToggleButton />
          <Sidebar isLogin={false} />
          {/*<MSWComponent />*/}
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
