'use client'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import {useSession} from "next-auth/react";

interface SettingListProps {
  items: { label: string; href: string }[]
}

export const SettingList = ({ items }: SettingListProps) => {
  const session = useSession()
  console.log(session)
  // TODO : 로그인 타입 확인이 필요함.
  return (
    <ul className="w-full">
      {items.map((item) => (
        <li key={item.label} className="p-3 border-b-[1px] hover:bg-gray-50">
          <Link href={item.href} className="flex text-sm items-center justify-between">
            {item.label}
            <ChevronRight className="text-gray-400" />
          </Link>
        </li>
      ))}
    </ul>
  )
}
