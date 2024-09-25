import { Anchor, Button, Flex, NavLink } from '@mantine/core'
import classes from '@/widgets/Sidebar/ui/styles.module.css'
import { SIDEBARS } from '@/widgets/Sidebar/constants'
import Link from 'next/link'

interface SidebarMenuListProps {}

export const SidebarMenuList = ({}: SidebarMenuListProps) => {
  return (
    <>
      {SIDEBARS.map((sidebar, sidebarIndex) => {
        return (
          <>
            <Anchor c="dark" fw={500} fz="lg" href={sidebar.href}>
              <Flex align="center" gap={20}>
                {sidebar.icon}
                <span className={classes.labelWrapper}>{sidebar.label}</span>
              </Flex>
            </Anchor>
          </>
        )
      })}
    </>
  )
}
