'use client'
import { Anchor, Container, Flex } from '@mantine/core'
import classes from './styles.module.css'
import { useDisclosure } from '@mantine/hooks'
import { IconSettings } from '@tabler/icons-react'
import Link from 'next/link'
import { PAGE } from '@/shared/constants/page'
import AddContentModal from '@/widgets/AddContentModal/ui'
import { SearchMember } from '@/shared/Sidebar/ui/SearchMember'
import { SidebarMenuList } from '@/shared/Sidebar/ui/SidebarMenuList'
import { Notifications } from '@/shared/Sidebar/ui/Notifications'
interface SidebarProps {
  isLogin?: boolean
}

export const Sidebar = ({ isLogin }: SidebarProps) => {
  const [
    isSearchMemberDrawerOpened,
    { open: searchMemberDrawerOpen, close: searchMemberDrawerClose },
  ] = useDisclosure(false)
  const [
    isNotificationDrawerOpened,
    { open: notificationDrawerOpen, close: notificationDrawerClose },
  ] = useDisclosure(false)
  const [isModalOpened, { open: modalOpen, close: modalClose }] = useDisclosure(false)

  return (
    <Container className={classes.wrap}>
      <div className={classes.topArea}>
        <SearchMember opened={isSearchMemberDrawerOpened} onClose={searchMemberDrawerClose} />
        <Notifications opened={isNotificationDrawerOpened} onClose={notificationDrawerClose} />
        <AddContentModal opened={isModalOpened} onClose={modalClose} />
        <SidebarMenuList
          isSearchMemberDrawerOpened={isSearchMemberDrawerOpened}
          isNotificationDrawerOpened={isNotificationDrawerOpened}
          onModalOpen={modalOpen}
          onSearchDrawerOpen={searchMemberDrawerOpen}
          onNotificationDrawerOpen={notificationDrawerOpen}
        />
      </div>
      <div className={classes.setting}>
        <Anchor c="dark" fw={500} fz="lg" href={PAGE.SETTINGS}>
          <Flex align="center" gap={20}>
            <IconSettings size="22px" stroke={2} />
            <span className={classes.labelWrapper}>설정</span>
          </Flex>
        </Anchor>
      </div>
    </Container>
  )
}
