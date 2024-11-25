'use client'

import Link from 'next/link'
import { Bell } from 'lucide-react'

export const HeaderNavigation = () => {
  return (
    <header className="w-full flex p-6 z-50 fixed items-center justify-between top-0 left-0 z-99 bg-white border border-slate-500	md:hidden">
      <h1 className="font-bold text-3xl">S</h1>
      <Link href="/notifications" className="flex font-medium">
        <Bell style={{ width: '20px', height: '20px' }} />
      </Link>
    </header>
  )
}
