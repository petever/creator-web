import React from 'react'
import { SidebarLayout } from '@/app/layouts/SidebarLayout'

interface FeedsLayoutProps {
  children: React.ReactNode
}
const FeedsLayout = ({ children }: FeedsLayoutProps) => {
  return (
    <SidebarLayout>
      {children}
    </SidebarLayout>
  )
}

export default FeedsLayout
