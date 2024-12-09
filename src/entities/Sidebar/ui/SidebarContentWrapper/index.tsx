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
import { ADD_CONTENT_BUTTONS } from '@/shared/constants'

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
            <AddContentModal
              item={ADD_CONTENT_BUTTONS}
              sidebarClassName={'mt-4 w-full rounded-2xl'}
            />
          </SidebarMenuItem>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  )
}
