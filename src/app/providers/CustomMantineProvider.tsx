import { MantineProvider } from '@mantine/core'

interface CustomMantineProviderProps {
  children: React.ReactNode
}

export default async function CustomMantineProvider({ children }: CustomMantineProviderProps) {
  return <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
}
