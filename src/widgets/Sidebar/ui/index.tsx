import {Button, Container, NavLink, } from '@mantine/core'
import { SIDEBARS } from '../constants'
import classes from './styles.module.css'
import {SearchMember} from "@/widgets/Sidebar/ui/SearchMember";
import {useDisclosure} from "@mantine/hooks";
import {AddContentModal} from "@/widgets/Sidebar/ui/AddContentModal";
interface SidebarProps {
  isLogin?: boolean
}

export const Sidebar = ({ isLogin }: SidebarProps) => {
  const [isDrawerOpened, { open : drawerOpen, close : drawerClose }] = useDisclosure(false);
  const [isModalOpened, { open : modalOpen, close : modalClose}] = useDisclosure(false)


  const handleDrawerOpen = (key : string) => {
    if (key === 'add_content') {
      return modalOpen()
    }
    drawerOpen()
  }

  return (
    <Container className={classes.wrap}>
      <SearchMember opened={isDrawerOpened} onClose={drawerClose}/>
      <AddContentModal opened={isModalOpened} onClose={modalClose}/>
      {SIDEBARS.map((sidebar, sidebarIndex) => {
        return (
          <div className={classes.menu} key={`sidebar_${sidebarIndex}`}>
            {!sidebar.href ?
              <Button
                variant='transparent'
                leftSection={
                  <span className={classes.iconWrapper}>
                    {sidebar.icon}
                  </span>
                }
                onClick={() => handleDrawerOpen(sidebar.key)}
              >
                <span className={classes.labelWrapper}>
                  {sidebar.label}
                </span>
              </Button>
            :
            <NavLink
              href={sidebar.href}
              label={
                <span className={classes.labelWrapper}>
                  {sidebar.label}
                </span>
              }
              leftSection={
                <span className={classes.iconWrapper}>
                  {sidebar.icon}
                </span>
              }
              key={`sidebar_${sidebarIndex}`}
            />
            }
          </div>
        )
      })}
    </Container>
  )
}
