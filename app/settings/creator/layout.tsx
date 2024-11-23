import React from 'react'
import { CommonLayout } from '../../../src/app/layouts/CommonLayout'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <CommonLayout>{children}</CommonLayout>
}

export default Layout
