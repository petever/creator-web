import { createTheme, MantineColorsTuple, MantineProvider } from '@mantine/core'

interface CustomMantineProviderProps {
  children: React.ReactNode
}

const themeColors: MantineColorsTuple = [
  '#e0f9ff',
  '#cbedff',
  '#9ad7ff',
  '#64c1fe',
  '#39aefc',
  '#1ca2fb',
  '#009cfc',
  '#0087e2',
  '#0078cb',
  '#0068b4',
]

const theme = createTheme({
  primaryColor: 'themeColors',
  primaryShade: 5,
  colors: {
    themeColors,
  },
})

export default async function CustomMantineProvider({ children }: CustomMantineProviderProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>
}
