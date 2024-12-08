import { HeaderNavigation } from '@/shared/ui/HeaderNavigation'
import { SidebarProvider } from '@/shared/ui/sidebar'
import { AppSidebar } from '@/shared/ui/AppSidebar/ui'
import { BottomNavigation } from '@/shared/ui/BottomNavigation'

interface SidebarLayoutProps {
  children: React.ReactNode
}

export async function CommonLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="max-w-screen-lg mx-auto">
      <HeaderNavigation />
      <SidebarProvider>
        <div className="w-full py-20 md:py-0 md:flex">
          <AppSidebar />
          <div className="flex-1">{children}</div>
        </div>
      </SidebarProvider>
      <BottomNavigation />
    </div>
  )
}
