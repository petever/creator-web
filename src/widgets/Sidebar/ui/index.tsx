import {Button, Container, Flex, NavLink, useMantineTheme} from '@mantine/core'
import { SIDEBARS } from '../constants'
import classes from './styles.module.css'

interface SidebarProps {
  isLogin?: boolean
}

export const Sidebar = ({ isLogin }: SidebarProps) => {

  return (
    <Container className={classes.wrap}>
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
