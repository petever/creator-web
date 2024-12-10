import { HeaderNavigation } from '@/shared/ui/HeaderNavigation'
import { SidebarProvider } from '@/shared/ui/sidebar'
import { AppSidebar } from '@/shared/ui/AppSidebar/ui'
import { BottomNavigation } from '@/shared/ui/BottomNavigation'

interface SidebarLayoutProps {
  children: React.ReactNode
}

export function CommonLayout({ children }: SidebarLayoutProps) {
  return (
    <div>
      <HeaderNavigation />
      <SidebarProvider>
        <div className="w-full h-[calc(100vh-144px)] md:h-screen overflow-hidden overflow-y-auto  mx-auto pt-[96px] pb-20 md:py-0 md:flex justify-center">
          <AppSidebar />
          <div className="w-full max-w-screen-md">{children}</div>
        </div>
      </SidebarProvider>
      <BottomNavigation />
    </div>
  )
}
