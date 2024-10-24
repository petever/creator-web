'use client'
import {
  ActionIcon,
  Flex,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSettings, IconSun } from '@tabler/icons-react'
import classes from '@/shared/Sidebar/ui/SidebarMenuList/styles.module.css'

export const ThemeToggleButton = () => {
  const { setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  })
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })
  const isLight = computedColorScheme === 'light'

  return (
    <Flex
      align="center"
      gap={20}
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
    >
      {isLight && <IconMoon stroke={1.5} />}
      {!isLight && <IconSun stroke={1.5} />}
      <Text>모드 전환</Text>
    </Flex>
  )
}
