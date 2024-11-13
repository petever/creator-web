import { SETTING_LISTS } from '@/widgets/SettingList/constants'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const SettingList = () => {
  return (
    <ul className="w-full">
      {SETTING_LISTS.map((item) => (
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
