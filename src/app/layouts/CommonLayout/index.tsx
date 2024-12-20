import { HeaderNavigation } from '@/shared/ui/HeaderNavigation'
import { SidebarProvider } from '@/shared/ui/sidebar'
import { AppSidebar } from '@/shared/ui/AppSidebar/ui'
import { BottomNavigation } from '@/shared/ui/BottomNavigation'

interface SidebarLayoutProps {
  children: React.ReactNode
}

export function CommonLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="pb-11">
      <HeaderNavigation />
      <SidebarProvider>
        <div className="w-full h-[calc(100vh-100px)] md:h-screen overflow-hidden overflow-y-auto  mx-auto md:py-0 md:flex justify-center">
          <AppSidebar />
          <div className="w-full h-full max-w-screen-md">{children}</div>
        </div>
      </SidebarProvider>
      <BottomNavigation />
    </div>
  )
}
