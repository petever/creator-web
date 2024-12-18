import React from 'react'
import { CommonLayout } from '@/app/layouts/CommonLayout'

interface FeedLayoutProps {
  children: React.ReactNode
}

const FeedLayout = ({ children }: FeedLayoutProps) => {
  return <CommonLayout>{children}</CommonLayout>
}

export default FeedLayout
