'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'

interface HeaderProps {
  text: string
  isBack?: boolean
  isBorder?: boolean
  align?: 'left' | 'center'
}

export const Header = ({ text, isBack, isBorder, align = 'left' }: HeaderProps) => {
  const router = useRouter()
  return (
    <div className={`flex p-2 items-center gap-2 ${isBorder && 'border-b'}`}>
      {isBack && (
        <button onClick={() => router.back()}>
          <ChevronLeft />
        </button>
      )}
      <h2 className="text-xl font-bold flex-1" style={{ textAlign: align }}>
        {text}
      </h2>
    </div>
  )
}
