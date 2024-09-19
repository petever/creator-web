import { Label } from '../../types'
import {IconBell, IconCompass, IconHome2, IconSearch, IconSend} from '@tabler/icons-react'

export const SIDEBARS: Label[] = [
  {
    icon: <IconHome2 size="1rem" stroke={1.5} />,
    href: '/',
    label: '홈',
    key : 'home',
    disabled: false,
  },
  {
    icon: <IconCompass size="1rem" stroke={1.5} />,
    href: '/explore',
    label: '탐색',
    key : 'explore',
    disabled: false,
  },
	// 검색 : 버튼
  {
    icon: <IconSearch size="1rem" stroke={1.5}/> ,
    href: '',
    label: '검색',
    key : 'search',
    disabled: false,
  },
	// 알림 : 버튼
  {
    icon: <IconBell size="1rem" stroke={1.5} />,
    href: '',
    label: '알림',
    key : 'alarm',
    disabled: false,
  },
  {
    icon: <IconSend size='1rem' stroke={1.5}/>,
    href: '/message',
    label: '메세지',
    key : 'message',
    disabled: false,
  },
]
