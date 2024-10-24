import { Box, NavLink } from '@mantine/core'
import { SETTING_LISTS } from '@/widgets/SettingList/constants'
import { IconChevronRight } from '@tabler/icons-react'

export const SettingList = () => {
  return (
    <Box w="100%">
      {SETTING_LISTS.map((item) => (
        <NavLink
          key={item.label}
          href={item.href}
          label={item.label}
          rightSection={<IconChevronRight stroke={1} size="1.5rem" />}
        />
      ))}
    </Box>
  )
}
