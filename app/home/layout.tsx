import React from 'react'
import { CommonLayout } from '@/app/layouts/CommonLayout'

interface HomeLayoutProps {
  children: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <CommonLayout>{children}</CommonLayout>
}

export default HomeLayout
