import {
  IconBell,
  IconCirclePlus,
  IconCompass,
  IconHome,
  IconSearch,
  IconSend,
} from '@tabler/icons-react'
import { Label } from '@/widgets/types'
import { Indicator } from '@mantine/core'

export const SIDEBARS: Label[] = [
  {
    icon: <IconHome size={30} stroke={1.5} />,
    href: '/home',
    label: '홈',
    key: 'home',
    disabled: false,
  },
  {
    icon: <IconCompass size={30} stroke={1.5} />,
    href: '/explore',
    label: '탐색',
    key: 'explore',
    disabled: false,
  },
  // 콘텐츠 추가 버튼
  {
    icon: <IconCirclePlus size={30} stroke={1.5} />,
    href: '',
    label: '추가',
    key: 'add_content',
    disabled: false,
  },
  {
    icon: <IconSearch size={30} stroke={1.5} />,
    href: '',
    label: '검색',
    key: 'search',
    disabled: false,
  },
  {
    icon: <IconSend size={30} stroke={1.5} />,
    href: '/message',
    label: '메세지',
    key: 'message',
    disabled: false,
  },
  {
    icon: (
      <Indicator disabled>
        <IconBell size={30} stroke={1.5} />
      </Indicator>
    ),
    href: '/notifications',
    label: '알림',
    key: 'notifications',
    disabled: false,
  },
]
