'use client'

import React from 'react'
import { CommonLayout } from '@/app/layouts/CommonLayout'
import { BorderLayout } from '@/app/layouts/BorderLayout'

interface ExploreLayoutProps {
  children: React.ReactNode
}

const ExploreLayout = ({ children }: ExploreLayoutProps) => {
  return (
    <CommonLayout>
      <BorderLayout>{children}</BorderLayout>
    </CommonLayout>
  )
}

export default ExploreLayout
