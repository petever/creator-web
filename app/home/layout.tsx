import React from 'react'
import { SidebarLayout } from '@/app/layouts/SidebarLayout'

interface HomeLayoutProps {
  children: React.ReactNode
}
const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <SidebarLayout isRecommend>{children}</SidebarLayout>
}

export default HomeLayout
