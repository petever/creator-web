import {Flex, NavLink} from '@mantine/core'
import { IconHome2 } from '@tabler/icons-react'
import { SIDEBARS } from '../constants'
import classes from './Sidebar.module.css'

interface SidebarProps {
  isLogin?: boolean
}

export const Sidebar = ({ isLogin }: SidebarProps) => {
  // if(!isLogin) return null

  return (
    <div
      className={classes.wrap}
    >
      <Flex
        wrap="wrap"
      >
        {SIDEBARS.map((sidebar, sidebarIndex) => {
          return (
            <div className={classes.menu}>
              <NavLink
                href="#required-for-focus"
                label={sidebar.label}
                leftSection={<IconHome2 size="1rem" stroke={1.5} />}
                key={`sidebar_${sidebarIndex}`}
              />
            </div>
          )
        })}
      </Flex>
    </div>
  )
}
