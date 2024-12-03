import { Switch } from '@/shared/ui/switch'
import React from 'react'

interface NotificationSettingItemProps {
  label: string
  checked: boolean
}

const NotificationSettingItem = ({ label, checked }: NotificationSettingItemProps) => {
  return (
    <div className="flex justify-between items-center p-2">
      <p>{label}</p>
      <Switch checked={checked} />
    </div>
  )
}

export default NotificationSettingItem
