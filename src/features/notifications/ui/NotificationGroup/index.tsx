import React from 'react'
import NotificationSettingItem from '@/features/notifications/ui/NotificationSettingItem'
import { NotificationSettingItems } from '@/entities/notifications/types'

interface NotificationGroupProps {
  legend: string
  items: NotificationSettingItems[]
}

const NotificationGroup = ({ legend, items }: NotificationGroupProps) => {
  return (
    <div className={'p-20 border-2 border-neutral-500'}>
			<p className={'font-semibold mb-10'}>
				{legend}
			</p>
      <div className={'flex-col gap-14'}>
        {items.map((item) => {
          return <NotificationSettingItem label={item.label} checked={item.checked} />
        })}
      </div>
    </div>
  )
}

export default NotificationGroup
