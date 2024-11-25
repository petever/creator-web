import { SidebarFooter, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/shared/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { ChevronUp, LogOut, Settings } from 'lucide-react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

export const SidebarFooterWrapper = () => {
  return (
    <SidebarFooter>
      <SidebarMenu className="cursor-pointer">
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                더보기
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
              <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
                <LogOut /> 로그아웃
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" asChild>
                <Link href="/settings">
                  <Settings /> 설정
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}
