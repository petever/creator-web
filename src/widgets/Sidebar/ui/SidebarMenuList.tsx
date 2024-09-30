import {  Flex, Text, UnstyledButton } from '@mantine/core'
import classes from '@/widgets/Sidebar/ui/styles.module.css'
import { SIDEBARS } from '@/widgets/Sidebar/constants'
import Link from 'next/link'

interface SidebarMenuListProps {
  onModalOpen: () => void
  onDrawerOpen: () => void
}

export const SidebarMenuList = ({ onModalOpen, onDrawerOpen }: SidebarMenuListProps) => {
  return (
    <Flex gap={40} direction="column">
      {SIDEBARS.map((sidebar, sidebarIndex) => {
        if (sidebar.label === '추가') {
          return (
						<UnstyledButton onClick={onModalOpen} key={sidebarIndex}>
							<Flex align="center" gap={20} >
								{sidebar.icon}
								<Text className={classes.labelWrapper}>{sidebar.label}</Text>
							</Flex>
						</UnstyledButton>
          )
        }
        return (
          <Link href={sidebar.href} key={sidebarIndex}>
            <Flex align="center" gap={20}>
              {sidebar.icon}
              <Text className={classes.labelWrapper}>{sidebar.label}</Text>
            </Flex>
          </Link>
        )
      })}
    </Flex>
  )
}
