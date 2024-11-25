'use client'

import React from 'react'
import { CommonLayout } from '@/app/layouts/CommonLayout'

interface ExploreLayoutProps {
  children: React.ReactNode
}

const ExploreLayout = ({ children }: ExploreLayoutProps) => {
  return <CommonLayout>{children}</CommonLayout>
}

export default ExploreLayout
