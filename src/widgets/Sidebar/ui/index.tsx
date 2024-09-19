import {Button, Container, Drawer, Flex, NavLink, useMantineTheme} from '@mantine/core'
import { SIDEBARS } from '../constants'
import classes from './styles.module.css'
import {useEffect, useState} from "react";
import {SearchMember} from "@/widgets/Sidebar/ui/SearchMember";
import {useDisclosure} from "@mantine/hooks";
import {Alarm} from "@/widgets/Sidebar/ui/Alarm";

interface SidebarProps {
  isLogin?: boolean
}

export const Sidebar = ({ isLogin }: SidebarProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [drawerKey, setDrawerKey] = useState('')


  const handleDrawerOpen = (key : string) => {
    open()
    setDrawerKey(key)
  }

  useEffect(() => {
    if(!opened) setDrawerKey('')
  }, [opened]);

  return (
    <Container className={classes.wrap}>
      <Drawer opened={opened} onClose={close} className={classes.drawerWrapper}>
        <SearchMember drawerKey={drawerKey}/>
        <Alarm drawerKey={drawerKey}/>
      </Drawer>
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
