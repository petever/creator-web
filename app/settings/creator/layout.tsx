import React from 'react'
import { SidebarLayout } from '@/app/layouts/SidebarLayout'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <SidebarLayout title="크리에이터 신청">{children}</SidebarLayout>
}

export default Layout
