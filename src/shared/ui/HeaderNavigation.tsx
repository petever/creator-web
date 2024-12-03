'use client'

import Link from 'next/link'
import { Bell } from 'lucide-react'
import {useIsMobile} from "@/shared/hooks/use-mobile";

export const HeaderNavigation = () => {
  const isMobile = useIsMobile()
  if(!isMobile) return null

  return (
    <header className="w-screen flex p-6 z-50 fixed items-center justify-between top-0 left-0 z-99 bg-white border-b">
      <h1 className="font-bold text-3xl">
        <Link href="/home" className="flex font-black">S</Link>
      </h1>
      <Link href="/notifications" className="flex font-medium">
        <Bell style={{ width: '20px', height: '20px' }} />
      </Link>
    </header>
  )
}
