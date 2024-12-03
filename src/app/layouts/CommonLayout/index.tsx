import { HeaderNavigation } from '@/shared/ui/HeaderNavigation'
import { SidebarProvider } from '@/shared/ui/sidebar'
import { AppSidebar } from '@/shared/ui/AppSidebar/ui'
import {BottomNavigation} from "@/shared/ui/BottomNavigation";

interface SidebarLayoutProps {
  children: React.ReactNode
}

export async function CommonLayout({ children }: SidebarLayoutProps) {
  return (
    <>
      <HeaderNavigation />
      <SidebarProvider>
        <div className="flex flex-1">
          <AppSidebar />
          <div className="flex flex-1 justify-center py-20">{children}</div>
        </div>
      </SidebarProvider>
      <BottomNavigation/>
    </>
  )
}
