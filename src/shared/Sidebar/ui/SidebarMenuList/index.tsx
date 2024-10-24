import { Flex, Popover, Text, UnstyledButton } from '@mantine/core'
import Link from 'next/link'
import { SIDEBARS } from '@/shared/Sidebar/constants'
import classes from './styles.module.css'
import { IconBaselineDensityMedium, IconSettings } from '@tabler/icons-react'
import { PAGE } from '@/shared/constants/page'

interface SidebarMenuListProps {
  isSearchMemberDrawerOpened: boolean
  onModalOpen: () => void
  onSearchDrawerOpen: () => void
}

const SidebarMenuList = ({
  isSearchMemberDrawerOpened,
  onModalOpen,
  onSearchDrawerOpen,
}: SidebarMenuListProps) => {
  const isDimmed = isSearchMemberDrawerOpened

  const handleSidebarEvent = (label: string) => {
    const isAddContent = label === '추가'
    const isSearch = label === '검색'

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
    <div className={classes.wrap}>
      <div className={classes.menu}>
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
            <Link href={sidebar.href} key={sidebarIndex} className={classes.linkStyle}>
              <Flex align="center" gap={20}>
                {sidebar.icon}
                <Text className={classes.labelWrapper}>{sidebar.label}</Text>
              </Flex>
            </Link>
          )
        })}
      </div>
      <div className={classes.settingMenu}>
        <Popover width={200} position="top" shadow="md">
          <Popover.Target>
            <Flex align="center" gap={20}>
              <IconBaselineDensityMedium size={30} stroke={2} />
              <Text className={classes.labelWrapper}>더 보기</Text>
            </Flex>
          </Popover.Target>
          <Popover.Dropdown>
            <Link href={PAGE.SETTINGS}>
              <Flex align="center" gap={20}>
                <IconSettings size={30} stroke={2} />
                <Text className={classes.labelWrapper}>설정</Text>
              </Flex>
            </Link>
          </Popover.Dropdown>
        </Popover>
      </div>
      {isDimmed && <div className={classes.dim}></div>}
    </div>
  )
}
export default SidebarMenuList
