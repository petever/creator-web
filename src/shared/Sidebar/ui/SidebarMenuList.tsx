import {  Flex, Text, UnstyledButton } from '@mantine/core'
import Link from 'next/link'
import {useMediaQuery} from "@mantine/hooks";
import {SIDEBARS} from "@/shared/Sidebar/constants";
import classes from '@/shared/Sidebar/ui/styles.module.css'

interface SidebarMenuListProps {
  onModalOpen: () => void
  onDrawerOpen: () => void
}

export const SidebarMenuList = ({ onModalOpen, onDrawerOpen }: SidebarMenuListProps) => {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const flexDirection = isMobile ? 'row' : 'column'

  return (
    <Flex
      gap={40}
      direction={flexDirection}
      justify={'space-between'}
      className={classes.menuWrapper}
    >
      {SIDEBARS.map((sidebar, sidebarIndex) => {
        if (sidebar.label === '추가' || '검색') {
          return (
						<UnstyledButton onClick={sidebar.label === '추가' ? onModalOpen : onDrawerOpen} key={sidebarIndex}>
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
