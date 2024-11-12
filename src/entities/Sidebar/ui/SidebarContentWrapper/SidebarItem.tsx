import { Button } from "@/shared/ui/button";
import { PAGE } from "@/shared/constants/page";
import Link from 'next/link'
import {ISidebarItem} from "@/entities/Sidebar/types";

interface SidebarItemProps {
  item : ISidebarItem
}
export const SidebarItem = ({ item } : SidebarItemProps) => {
  const sidebarClassName = 'flex py-2 px-4 gap-2 text-left font-medium'
  const isLink = item.url !== '#'

  if(isLink) {
    return (
      <Link href={item.url} className={sidebarClassName}>
        <item.icon style={{ width: '20px', height: '20px' }} />
        <span className="text-base font-medium">{item.title}</span>
      </Link>
    )
  }

  return (
    <Button variant='ghost' className={sidebarClassName}>
      <item.icon style={{ width: '20px', height: '20px' }} />
      <span className="text-base font-medium">{item.title}</span>
    </Button>
  )
}
