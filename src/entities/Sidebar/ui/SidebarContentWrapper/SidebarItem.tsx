import { Button } from '@/shared/ui/button'
import Link from 'next/link'
import { ISidebarItem } from '@/entities/Sidebar/types'
import AddContentModal from '@/widgets/AddContentModal/ui'

interface SidebarItemProps {
  item: ISidebarItem
}

export const SidebarItem = ({ item }: SidebarItemProps) => {
  const sidebarClassName = 'flex py-2 px-4 gap-2 w-full justify-normal font-medium '

  if (item.title === '검색') {
    return (
      <Button variant="ghost" className={sidebarClassName}>
        <item.icon style={{ width: '24px', height: '24px' }} />
        <span className="text-base font-medium ">{item.title}</span>
      </Button>
    )
  }

  if (item.title === '추가') {
    return <AddContentModal item={item} sidebarClassName={sidebarClassName} />
  }

  return (
    <Link href={item.url} className={sidebarClassName}>
      <item.icon style={{ width: '24px', height: '24px' }} />
      <span className="text-base font-medium hidden md:inline-block">{item.title}</span>
    </Link>
  )
}
