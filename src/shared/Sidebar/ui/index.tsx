'use client'
import { Container, Flex, Title } from '@mantine/core'
import classes from './styles.module.css'
import { useDisclosure } from '@mantine/hooks'
import AddContentModal from '@/widgets/AddContentModal/ui'
import { SearchMember } from '@/shared/Sidebar/ui/SearchMember'
import SidebarMenuList from '@/shared/Sidebar/ui/SidebarMenuList'

interface SidebarProps {
  isLogin?: boolean
}

export const Sidebar = ({ isLogin }: SidebarProps) => {
  const [
    isSearchMemberDrawerOpened,
    { open: searchMemberDrawerOpen, close: searchMemberDrawerClose },
  ] = useDisclosure(false)

  const [isModalOpened, { open: modalOpen, close: modalClose }] = useDisclosure(false)

  return (
    <Container className={classes.wrap}>
      <SearchMember opened={isSearchMemberDrawerOpened} onClose={searchMemberDrawerClose} />
      <AddContentModal opened={isModalOpened} onClose={modalClose} />
      <Flex direction="column" gap={30} h="100%" w="100%">
        <Title p={4} className={classes.logo}>
          S
        </Title>
        <SidebarMenuList
          isSearchMemberDrawerOpened={isSearchMemberDrawerOpened}
          onModalOpen={modalOpen}
          onSearchDrawerOpen={searchMemberDrawerOpen}
        />
      </Flex>
    </Container>
  )
}
