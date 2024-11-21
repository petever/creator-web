'use client'

import React from 'react'
import { IconChevronLeft } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

interface HeaderProps {
  isBack?: boolean
  text: string
}

const Header = ({ isBack, text }: HeaderProps) => {
  const router = useRouter()
  const handleClick = () => {
    router.back()
  }

  return (
    <div className='items-center p-14 gap-10'>
      <IconChevronLeft onClick={handleClick} />
      <p>{text}</p>
    </div>
  )
}

export default Header
