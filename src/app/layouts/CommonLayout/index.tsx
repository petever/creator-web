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
        <div className="flex w-full">
          <AppSidebar />
          <div className="flex-1">{children}</div>
        </div>
      </SidebarProvider>
      <BottomNavigation />
    </div>
  )
}
