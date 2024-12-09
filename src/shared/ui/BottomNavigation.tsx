'use client'
import { SidebarItem } from "@/entities/Sidebar/ui/SidebarContentWrapper/SidebarItem";
import { useIsMobile } from "@/shared/hooks/use-mobile";
import {ADD_CONTENT_BUTTONS, BOTTOM_NAVIGATIONS} from "@/shared/constants";
import AddContentModal from "@/widgets/AddContentModal/ui";

export const BottomNavigation = () => {
  const isMobile = useIsMobile()
  if(!isMobile) return null

  return (
    <div className='fixed -bottom-0 left-0 h-16'>
      <ul className='flex w-screen justify-between items-center h-16 pl-20 pr-20 bg-white'>
        {BOTTOM_NAVIGATIONS.map((item) => {
          return (
            <li key={item.title}>
            <SidebarItem item={item} />
            </li>
          )
        })}
      </ul>
      <AddContentModal item={ADD_CONTENT_BUTTONS} sidebarClassName='
          fixed bottom-9 left-1/2
          -ml-7
          w-14 h-14
          rounded-full
          z-50
          bg-theme-blue-600
          hover:bg-theme-blue-800
          shadow-md
        '/>
    </div>
  )
}