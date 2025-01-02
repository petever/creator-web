'use client'
import { useIsMobile } from '@/shared/hooks/use-mobile'
import AddContentModal from '@/widgets/AddContentModal/ui'
import Link from 'next/link'
import { PAGE } from '@/shared/constants/page'
import { Bell, Compass, Home, Settings } from 'lucide-react'

export const BottomNavigation = () => {
  const isMobile = useIsMobile()
  if (!isMobile) return null

  return (
    <div className="fixed w-full bg-white bottom-0 flex items-center justify-between  px-4 py-3 border-t">
      <Link href={PAGE.HOME}>
        <Home size={28} />
      </Link>
      <Link href={PAGE.EXPLORE}>
        <Compass size={28} />
      </Link>
      <AddContentModal />
      <Link href={PAGE.NOTIFICATIONS}>
        <Bell size={28} />
      </Link>
      <Link href={PAGE.SETTINGS}>
        <Settings size={28} />
      </Link>
    </div>
  )
}
