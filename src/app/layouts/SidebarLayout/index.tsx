'use client'
import { SidebarProvider } from '@/shared/ui/sidebar'
import { AppSidebar } from '@/shared/ui/AppSidebar/ui'

interface SidebarLayoutProps {
  children: React.ReactNode
}

export async function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex flex-1">
        <AppSidebar />
        <div className="flex flex-1 justify-center">{children}</div>
      </div>
    </SidebarProvider>
  )
}
