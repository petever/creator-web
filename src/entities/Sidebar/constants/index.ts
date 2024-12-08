import { Bell, CirclePlus, Compass, Home } from 'lucide-react'
import { PAGE } from '@/shared/constants/page'
import { ISidebarItem } from '@/entities/Sidebar/types'

export const SIDEBAR_ITEMS: ISidebarItem[] = [
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
    title: '알림',
    url: '/notifications',
    icon: Bell,
  },
]

