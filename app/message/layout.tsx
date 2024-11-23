import React from 'react'
import { CommonLayout } from '../../src/app/layouts/CommonLayout'

interface MessageLayoutProps {
  children: React.ReactNode
}

const MessageLayout = ({ children }: MessageLayoutProps) => {
  return <CommonLayout>{children}</CommonLayout>
}

export default MessageLayout
