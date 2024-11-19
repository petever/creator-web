'use client'
import Link from 'next/link'
import { Avatar } from '@/shared/ui/avatar'

export const NotificationItem = () => {
  return (
    <li className="p-5">
      <Link href="/notifications">
        <div className="flex gap-6 w-full">
          <Avatar />
          <div>
            <p>Notification title</p>
            <p>Notification des</p>
          </div>
          <p>Notification time</p>
          <div className="ml-auto">
            <p>이미지</p>
          </div>
        </div>
      </Link>
    </li>
  )
}
