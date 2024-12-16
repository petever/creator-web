'use client'

import Link from 'next/link'
import { useIsMobile } from '@/shared/hooks/use-mobile'
import Image from 'next/image'

export const HeaderNavigation = () => {
  const isMobile = useIsMobile()
  if (!isMobile) return null

  return (
    <header className="flex p-2 sticky items-center justify-between border-b">
      <h1 className="font-bold text-3xl">
        <Link href="/home" className="flex font-black">
          <Image src={'/assets/logo/SHU_logo_05.png'} alt="" width={160} height={30} />
        </Link>
      </h1>
    </header>
  )
}
