import {  CirclePlus, Compass, Home, Search } from 'lucide-react'
import {PAGE} from "@/shared/constants/page";

export const SIDEBAR_ITEMS = [
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
