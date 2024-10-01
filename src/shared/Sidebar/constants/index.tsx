import {
  IconBell,
  IconCirclePlus,
  IconCompass,
  IconHome2,
  IconSearch,
  IconSend,
} from '@tabler/icons-react'
import {Label} from "@/widgets/types";

export const SIDEBARS: Label[] = [
  {
    icon: <IconHome2 size="22px" stroke={2} />,
    href: '/main',
    label: '홈',
    key: 'home',
    disabled: false,
  },
  {
    icon: <IconCompass size="22px" stroke={2} />,
    href: '/explore',
    label: '탐색',
    key: 'explore',
    disabled: false,
  },
  // 콘텐츠 추가 버튼
  {
    icon: <IconCirclePlus size="22px" stroke={2} />,
    href: '',
    label: '추가',
    key: 'add_content',
    disabled: false,
  },
  {
    icon: <IconSearch size="22px" stroke={2} />,
    href: '',
    label: '검색',
    key: 'search',
    disabled: false,
  },

  {
    icon: <IconSend size="22px" stroke={2} />,
    href: '/message',
    label: '메세지',
    key: 'message',
    disabled: false,
  },
]
