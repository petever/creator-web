import { NavLink } from '@mantine/core'
import { IconHome2 } from '@tabler/icons-react'
import { SIDEBARS } from '../constants'

interface SidebarProps {
  isLogin?: boolean
}

export const Sidebar = ({ isLogin }: SidebarProps) => {
  // if(!isLogin) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '300px',
        height: '100vh',
        borderRight: '1px solid #bebebe',
      }}
    >
      {SIDEBARS.map((sidebar, sidebarIndex) => {
        return (
          <NavLink
            href="#required-for-focus"
            label={sidebar.label}
            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
            key={`sidebar_${sidebarIndex}`}
          />
        )
      })}
    </div>
  )
}
