import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui/sidebar'

import { SIDEBAR_ITEMS } from '@/entities/Sidebar/constants'
import { SidebarItem } from '@/entities/Sidebar/ui/SidebarContentWrapper/SidebarItem'
import AddContentModal from '@/widgets/AddContentModal/ui'

export const SidebarContentWrapper = () => {
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu className={`gap-4 'flex-col`}>
            {SIDEBAR_ITEMS.map((item) => {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <SidebarItem item={item} />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
          <SidebarMenuItem>
            <AddContentModal />
          </SidebarMenuItem>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  )
}
