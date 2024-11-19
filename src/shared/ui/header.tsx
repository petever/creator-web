'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

interface HeaderProps {
  text: string
  isBack?: boolean
  isBorder?: boolean
}

export const Header = ({ text, isBack, isBorder }: HeaderProps) => {
  const router = useRouter()
  return (
    <div className={`flex p-2 items-center gap-2 ${isBorder && 'border-b'}`}>
      {isBack && (
        <button onClick={() => router.back()}>
          <ChevronLeft />
        </button>
      )}
      <h2 className="text-xl font-bold">{text}</h2>
    </div>
  )
}
