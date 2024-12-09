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
import {useIsMobile} from "@/shared/hooks/use-mobile";
import AddContentModal from "@/widgets/AddContentModal/ui";
import {ADD_CONTENT_BUTTONS} from "@/shared/constants";

export const SidebarContentWrapper = () => {
	const isMobile = useIsMobile()

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
            <AddContentModal item={ADD_CONTENT_BUTTONS} sidebarClassName={'mt-4'}/>
          </SidebarMenuItem>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  )
}
