import { HeaderNavigation } from '@/shared/ui/HeaderNavigation'
import { SidebarProvider } from '@/shared/ui/sidebar'
import { AppSidebar } from '@/shared/ui/AppSidebar/ui'
import { BottomNavigation } from '@/shared/ui/BottomNavigation'

interface SidebarLayoutProps {
  children: React.ReactNode
}

export async function CommonLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="max-w-screen-xl mx-auto">
      <HeaderNavigation />
      <SidebarProvider>
        <div className="w-full pt-[96px] pb-20 md:py-0 md:flex">
          <AppSidebar />
          <div className="flex-1
            h-[calc(100vh-144px)]
            overflow-y-auto
            md:h-screen
          ">{children}</div>
        </div>
      </SidebarProvider>
      <BottomNavigation />
    </div>
  )
}
