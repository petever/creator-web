import { Flex, Text, UnstyledButton } from '@mantine/core'
import Link from 'next/link'
import { useMediaQuery } from '@mantine/hooks'
import { SIDEBARS } from '@/shared/Sidebar/constants'
import classes from '@/shared/Sidebar/ui/styles.module.css'

interface SidebarMenuListProps {
  isSearchMemberDrawerOpened: boolean
  onModalOpen: () => void
  onSearchDrawerOpen: () => void
}

export const SidebarMenuList = ({
  isSearchMemberDrawerOpened,
  onModalOpen,
  onSearchDrawerOpen,
}: SidebarMenuListProps) => {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const flexDirection = isMobile ? 'row' : 'column'
  const isDimmed = isSearchMemberDrawerOpened

  const handleSidebarEvent = (label: string) => {
    const isAddContent = label === '추가'
    const isSearch = label === '검색'
    const isNotification = label === '알림'

    if (isAddContent) {
      onModalOpen()
    }
    if (isSearch) {
      onSearchDrawerOpen()
    }
  }

  const getIsMenuDrawer = (label: string) => {
    return label === '추가' || label === '검색'
  }

  return (
    <Flex
      gap={40}
      direction={flexDirection}
      justify={'space-between'}
      className={classes.menuWrapper}
    >
      {SIDEBARS.map((sidebar, sidebarIndex) => {
        if (getIsMenuDrawer(sidebar.label)) {
          return (
            <UnstyledButton onClick={() => handleSidebarEvent(sidebar.label)} key={sidebarIndex}>
              <Flex align="center" gap={20}>
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
      {isDimmed && <div className={classes.dim}></div>}
    </Flex>
  )
}
