import { createTheme, MantineColorsTuple, MantineProvider } from '@mantine/core'

interface CustomMantineProviderProps {
  children: React.ReactNode
}

const themeColors: MantineColorsTuple = [
  '#fff8e1',
  '#ffefcb',
  '#ffdd9a',
  '#ffca64',
  '#ffba38',
  '#ffb01b',
  '#ffab09',
  '#e39500',
  '#cb8400',
  '#b07100',
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
