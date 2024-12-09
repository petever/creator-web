import Link from 'next/link'
import { ISidebarItem } from '@/entities/Sidebar/types'

interface SidebarItemProps {
  item: ISidebarItem
}

export const SidebarItem = ({ item }: SidebarItemProps) => {
  const sidebarClassName = 'flex py-2 px-4 gap-2 w-full justify-normal font-medium'

  return (
    <Link href={item.url} className={sidebarClassName}>
      <item.icon style={{ width: '24px', height: '24px' }} />
      <span className="text-base font-medium hidden md:inline-block">{item.title}</span>
    </Link>
  )
}
