import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { MSWComponent } from '../mocks/MSWComponent'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider defaultColorScheme="dark">
          {children}
          <MSWComponent />
        </MantineProvider>
      </body>
    </html>
  )
}
