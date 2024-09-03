import {Flex, NavLink} from "@mantine/core";
import {IconHome2} from "@tabler/icons-react";
import {SIDEBARS} from "../../constants";

interface SidebarProps {
  isLogin ?: boolean
}

export const Sidebar = ({isLogin} : SidebarProps) => {
  // if(!isLogin) return null

  return (
    <Flex
      flex='1'
    >
      {SIDEBARS.map((sidebar, sidebarIndex) => {
        return (
          <NavLink
          href="#required-for-focus"
          label="With icon"
          leftSection={<IconHome2 size="1rem" stroke={1.5} />}
          key={`sidebar_${sidebarIndex}`}
        />
        )
      })}
    </Flex>
  )
}
