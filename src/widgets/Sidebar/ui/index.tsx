'use client'
import { Button, Container, NavLink } from '@mantine/core'
import classes from './styles.module.css'
import { SearchMember } from '@/widgets/Sidebar/ui/SearchMember'
import { useDisclosure } from '@mantine/hooks'
import { AddContentModal } from '@/widgets/Sidebar/ui/AddContentModal'
import { IconSettings } from '@tabler/icons-react'
import Link from 'next/link'
import { PAGE } from '@/shared/constants/page'
import { SidebarMenuList } from '@/widgets/Sidebar/ui/SidebarMenuList'
interface SidebarProps {
  isLogin?: boolean
}

export const Sidebar = ({ isLogin }: SidebarProps) => {
  const [isDrawerOpened, { open: drawerOpen, close: drawerClose }] = useDisclosure(false)
  const [isModalOpened, { open: modalOpen, close: modalClose }] = useDisclosure(false)

  const handleDrawerOpen = (key: string) => {
    if (key === 'add_content') {
      return modalOpen()
    }
    drawerOpen()
  }

  return (
    <Container className={classes.wrap}>
      <div className={classes.topArea}>
        <SearchMember opened={isDrawerOpened} onClose={drawerClose} />
        <AddContentModal opened={isModalOpened} onClose={modalClose} />
        <SidebarMenuList onModalOpen={modalOpen} onDrawerOpen={drawerOpen} />
      </div>
      <div className={classes.setting}>
        <Link href={PAGE.SETTINGS}>
          <IconSettings />
          <span className={classes.labelWrapper}>설정</span>
        </Link>
      </div>
    </Container>
  )
}
