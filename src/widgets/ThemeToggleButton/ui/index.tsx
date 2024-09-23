'use client'
import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'

export const ThemeToggleButton = () => {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  })
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })
  const isLight = computedColorScheme === 'light'

  return (
    <div
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 9999,
      }}
    >
      <ActionIcon
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      >
        {isLight && <IconMoon stroke={1.5} />}
        {!isLight && <IconSun stroke={1.5} />}
      </ActionIcon>
    </div>
  )
}
