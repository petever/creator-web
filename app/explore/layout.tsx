import React from 'react'
import { CommonLayout } from '../../src/app/layouts/CommonLayout'

interface ExploreLayoutProps {
  children: React.ReactNode
}
const ExploreLayout = ({ children }: ExploreLayoutProps) => {
  return <CommonLayout>{children}</CommonLayout>
}

export default ExploreLayout
