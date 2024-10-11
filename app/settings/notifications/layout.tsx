import React from 'react'
import { SidebarLayout } from '@/app/layouts/SidebarLayout'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <SidebarLayout title="알림 설정">{children}</SidebarLayout>
}

export default Layout
