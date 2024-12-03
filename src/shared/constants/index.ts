import {ISidebarItem} from "@/entities/Sidebar/types";
import {PAGE} from "@/shared/constants/page";
import {CirclePlus, Compass, Home} from "lucide-react";

export const BOTTOM_NAVIGATIONS : ISidebarItem[] = [
  {
    title: '홈',
    url: PAGE.HOME,
    icon: Home,
  },
  {
    title: '추가',
    url: '#',
    icon: CirclePlus,
  },
  {
    title: '탐색',
    url: '/explore',
    icon: Compass,
  },
]