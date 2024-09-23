import React from 'react'
import { SidebarLayout } from '@/app/layouts/SidebarLayout'
import Header from '@/features/Header'

interface MyLayoutProps {
  children: React.ReactNode
}
const MyLayout = ({ children }: MyLayoutProps) => {
  return (
    <SidebarLayout>
      <Header text="프로필" />
      {children}
    </SidebarLayout>
  )
}

export default MyLayout
