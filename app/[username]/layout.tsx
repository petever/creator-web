import React from 'react'
import { CommonLayout } from '@/app/layouts/CommonLayout'

interface FeedsLayoutProps {
  children: React.ReactNode
}

const FeedsLayout = ({ children }: FeedsLayoutProps) => {
  return <CommonLayout>{children}</CommonLayout>
}

export default FeedsLayout
