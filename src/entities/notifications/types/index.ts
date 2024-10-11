export type NotificationSettingItems = {
  label: string
  checked: boolean
}

export type NotificationContents = {
  [key: string]: NotificationSettingItems[]
}
