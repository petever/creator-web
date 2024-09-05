import { Flex, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Sidebar } from '@/widgets/Sidebar'
import { ThemeToggleButton } from '@/widgets/ThemeToggleButton'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <MantineProvider defaultColorScheme="dark">
          <Sidebar isLogin={false} />
          <Flex gap="xl">
            <ThemeToggleButton />
            <Flex flex="3">{children}</Flex>
          </Flex>
          {children}
          {/*<MSWComponent />*/}
        </MantineProvider>
      </body>
    </html>
  )
}
