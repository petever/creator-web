'use client'
import { SidebarItem } from "@/entities/Sidebar/ui/SidebarContentWrapper/SidebarItem";
import { useIsMobile } from "@/shared/hooks/use-mobile";
import { BOTTOM_NAVIGATIONS } from "@/shared/constants";

export const BottomNavigation = () => {
  const isMobile = useIsMobile()
  if(!isMobile) return null

  return (
    <ul className='fixed bottom-0 left-0 flex w-screen justify-between items-center h-14 pl-20 pr-20 bg-white'>
      {BOTTOM_NAVIGATIONS.map((item) => {
        return (
          <li key={item.title}>
            <SidebarItem item={item} />
          </li>
        )
      })}
    </ul>
  )
}