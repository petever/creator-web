import React from 'react'
import { SidebarLayout } from '@/app/layouts/SidebarLayout'

interface MessageLayoutProps {
  children: React.ReactNode
}
const MessageLayout = ({ children }: MessageLayoutProps) => {
  return (
    <SidebarLayout title={'설정'}>
      {children}
    </SidebarLayout>
  )
}

export default MessageLayout
