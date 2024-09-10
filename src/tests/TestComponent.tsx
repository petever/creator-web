'use client'

import { MantineProvider } from '@mantine/core'

type TestComponentProp = {
  children: React.ReactNode
}
const TestComponent = ({ children }: TestComponentProp) => {
  return <MantineProvider>{children}</MantineProvider>
}

export default TestComponent
