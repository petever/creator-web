'use client'

import {Button, Container, Flex, NavLink, useMantineTheme} from '@mantine/core'
import { IconHome2 } from '@tabler/icons-react'
import { SIDEBARS } from '../constants'
import classes from './Sidebar.module.css'
import { useMediaQuery } from '@mantine/hooks'

interface SidebarProps {
  isLogin?: boolean
}

export const Sidebar = ({ isLogin }: SidebarProps) => {

  return (
    <Container className={classes.wrap}>
      <Flex wrap={'wrap'}>
        {SIDEBARS.map((sidebar, sidebarIndex) => {
          return (
            <div className={classes.menu} key={`sidebar_${sidebarIndex}`}>
							{!sidebar.href ?
								<Button
									variant='transparent'
								>{sidebar.label}</Button>
							:
              <NavLink
                href={sidebar.href}
                label={sidebar.label}
                leftSection={<IconHome2 size="1rem" stroke={1.5} />}
                key={`sidebar_${sidebarIndex}`}
              />
							}
            </div>
          )
        })}
      </Flex>
    </Container>
  )
}
