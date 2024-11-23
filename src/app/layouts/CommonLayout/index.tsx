'use client'
import { SidebarProvider } from '@/shared/ui/sidebar'
import { AppSidebar } from '@/shared/ui/AppSidebar/ui'
import {HeaderNavigation} from "@/shared/ui/HeaderNavigation";

interface SidebarLayoutProps {
  children: React.ReactNode
}

export async function CommonLayout({ children }: SidebarLayoutProps) {
  return (
		<div>
			<HeaderNavigation/>
			<SidebarProvider>
				<div className="flex flex-1">
					<AppSidebar />
					<div className="flex flex-1 justify-center">{children}</div>
				</div>
			</SidebarProvider>
		</div>
  )
}
