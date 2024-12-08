import React from 'react'
import { BorderLayout } from '@/app/layouts/BorderLayout'
import { CommonLayout } from '@/app/layouts/CommonLayout'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <CommonLayout>
      <BorderLayout>{children}</BorderLayout>
    </CommonLayout>
  )
}

export default Layout
