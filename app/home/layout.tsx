import React from 'react'
import { CommonLayout } from '../../src/app/layouts/CommonLayout'

interface HomeLayoutProps {
  children: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <CommonLayout>{children}</CommonLayout>
}

export default HomeLayout
