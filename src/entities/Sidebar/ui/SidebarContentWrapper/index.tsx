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
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/shared/ui/dropdown-menu";
import {ChevronUp, Settings} from "lucide-react";
import Link from "next/link";

export const SidebarContentWrapper = () => {
	const isMobile = useIsMobile()

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu className={`gap-4 ${isMobile ? 'flex-row justify-between' : 'flex-col'}`}>
            {SIDEBAR_ITEMS.map((item) => {
							if(isMobile && item.title === '알림') return null
							return (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<SidebarItem item={item} />
									</SidebarMenuButton>
								</SidebarMenuItem>
            	)
						})}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  )
}
