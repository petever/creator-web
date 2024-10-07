import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core'

interface CustomMantineProviderProps {
  children: React.ReactNode
}

const themeColors: MantineColorsTuple = [
  '#fff9e3',
  '#fbf0d1',
  '#f4e0a6',
  '#edcf76',
  '#e8c14e',
  '#e5b834',
  '#e3b325',
  '#c99d17',
  '#b48b0d',
  '#9b7800',
]

const theme = createTheme({
  primaryColor: 'themeColors',
  primaryShade: 5,
  colors: {
    themeColors,
  },
})

export default async function CustomMantineProvider({ children }: CustomMantineProviderProps) {
  return (
    <MantineProvider defaultColorScheme="light" theme={theme}>
      {children}
    </MantineProvider>
  )
}
