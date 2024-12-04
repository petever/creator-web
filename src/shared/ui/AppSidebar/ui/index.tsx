'use client'
import { Sidebar } from '@/shared/ui/sidebar'

import { SidebarContentWrapper, SidebarFooterWrapper, SidebarHeaderWrapper } from '@/entities'
import { useIsMobile } from '@/shared/hooks/use-mobile'

interface AppSidebarProps {}

export const AppSidebar = ({}: AppSidebarProps) => {
  const isMobile = useIsMobile()

  if (isMobile) return null

  return (
    <Sidebar style={{ left: 'inherit', border: 0 }}>
      <SidebarHeaderWrapper />
      <SidebarContentWrapper />
      <SidebarFooterWrapper />
    </Sidebar>
  )
}
