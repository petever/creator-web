'use client'
import Link from 'next/link'
import { Avatar } from '@/shared/ui/avatar'
import { Notification } from '@/entities/notifications/types'

type NotificationItemProps = Omit<Notification, 'id' | 'type'>
export const NotificationItem = ({ title, message, isRead, createdAt }: NotificationItemProps) => {
  return (
    <li className="p-5">
      <Link href="/notifications">
        <div className="flex gap-6 w-full">
          <Avatar />
          <div>
            <p>{title}</p>
            <p>{message}</p>
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
