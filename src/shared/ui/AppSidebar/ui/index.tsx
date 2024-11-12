'use client'
import {
  Sidebar,
} from '@/shared/ui/sidebar'
import {  CirclePlus, Compass, Home, Search } from 'lucide-react'

import {SidebarContentWrapper, SidebarFooterWrapper, SidebarHeaderWrapper} from "@/entities";

interface AppSidebarProps {}

export const AppSidebar = ({}: AppSidebarProps) => {


  return (
    <Sidebar>
      <SidebarHeaderWrapper/>
      <SidebarContentWrapper/>
      <SidebarFooterWrapper/>
    </Sidebar>
  )
}
