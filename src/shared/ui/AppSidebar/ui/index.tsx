'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/shared/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { ChevronUp, CirclePlus, Compass, Home, Search, Settings } from 'lucide-react'
import { PAGE } from '@/shared/constants/page'
import Link from 'next/link'

interface AppSidebarProps {}

export const AppSidebar = ({}: AppSidebarProps) => {
  const items = [
    {
      title: '홈',
      url: PAGE.HOME,
      icon: Home,
    },

    {
      title: '탐색',
      url: '/explore',
      icon: Compass,
    },
    {
      title: '검색',
      url: '#',
      icon: Search,
    },
    {
      title: '추가',
      url: '#',
      icon: CirclePlus,
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="font-bold text-3xl">S</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon style={{ width: '20px', height: '20px' }} />
                      <span className="text-base font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  더보기
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings /> 설정
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
