import React from 'react'
import { SidebarLayout } from '@/app/layouts/SidebarLayout'

interface MyLayoutProps {
  children: React.ReactNode
}
const MyLayout = ({ children }: MyLayoutProps) => {
  return (
    <SidebarLayout>
      {children}
    </SidebarLayout>
  )
}

export default MyLayout
