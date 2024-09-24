import React from 'react'
import { SidebarLayout } from '@/app/layouts/SidebarLayout'

interface ExploreLayoutProps {
  children: React.ReactNode
}
const ExploreLayout = ({ children }: ExploreLayoutProps) => {
  return (
    <SidebarLayout>
      {children}
    </SidebarLayout>
  )
}

export default ExploreLayout
