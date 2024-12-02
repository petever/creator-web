'use client'
import { Sidebar } from '@/shared/ui/sidebar'
import { CirclePlus, Compass, Home, Search } from 'lucide-react'

import { SidebarContentWrapper, SidebarFooterWrapper, SidebarHeaderWrapper } from '@/entities'
import {useIsMobile} from "@/shared/hooks/use-mobile";

interface AppSidebarProps {}

export const AppSidebar = ({}: AppSidebarProps) => {
  const isMobile = useIsMobile()

  if(isMobile) return null

  return (
    <Sidebar>
      <SidebarHeaderWrapper />
      <SidebarContentWrapper />
      <SidebarFooterWrapper />
    </Sidebar>
  )
}
