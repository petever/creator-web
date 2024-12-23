import React from 'react'
import { CommonLayout } from '../../src/app/layouts/CommonLayout'
import {BorderLayout} from "@/app/layouts/BorderLayout";

interface MessageLayoutProps {
  children: React.ReactNode
}

const MessageLayout = ({ children }: MessageLayoutProps) => {
  return (
    <CommonLayout>
      <BorderLayout>
        {children}
      </BorderLayout>
    </CommonLayout>
  )
}

export default MessageLayout
