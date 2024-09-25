import { Anchor, Button, Flex, NavLink, Text } from '@mantine/core'
import classes from '@/widgets/Sidebar/ui/styles.module.css'
import { SIDEBARS } from '@/widgets/Sidebar/constants'
import Link from 'next/link'

interface SidebarMenuListProps {}

export const SidebarMenuList = ({}: SidebarMenuListProps) => {
  return (
    <Flex gap={40} direction="column">
      {SIDEBARS.map((sidebar, sidebarIndex) => {
        return (
          <>
            <Anchor fw={500} fz="lg" href={sidebar.href}>
              <Flex align="center" gap={20}>
                {sidebar.icon}
                <Text className={classes.labelWrapper}>{sidebar.label}</Text>
              </Flex>
            </Anchor>
          </>
        )
      })}
    </Flex>
  )
}
