import { Button, NavLink } from '@mantine/core'
import classes from "@/widgets/Sidebar/ui/styles.module.css";
import {SIDEBARS} from "@/widgets/Sidebar/constants";

interface SidebarMenuListProps{
  onModalOpen : () => void
  onDrawerOpen : () => void
}

export const SidebarMenuList = ({onModalOpen, onDrawerOpen} : SidebarMenuListProps) => {
  const handleDrawerOpen = (key: string) => {
    if (key === 'add_content') {
      return onModalOpen()
    }
    onDrawerOpen()
  }

  return (
    <>
      {SIDEBARS.map((sidebar, sidebarIndex) => {
          return (
            <div className={classes.menu} key={`sidebar_${sidebarIndex}`}>
              {!sidebar.href ? (
                <Button
                  variant="transparent"
                  leftSection={<span className={classes.iconWrapper}>{sidebar.icon}</span>}
                  onClick={() => handleDrawerOpen(sidebar.key)}
                >
                  {/*<span className={classes.labelWrapper}>{sidebar.label}</span>*/}
                </Button>
              ) : (
                <NavLink
                  href={sidebar.href}
                  // label={<span className={classes.labelWrapper}>{sidebar.label}</span>}
                  leftSection={<span className={classes.iconWrapper}>{sidebar.icon}</span>}
                  key={`sidebar_${sidebarIndex}`}
                />
              )}
            </div>
          )
        })}
    </>
  )
}
