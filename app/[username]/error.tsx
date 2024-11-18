'use client'

import React from 'react'
import { IconExclamationCircleFilled } from '@tabler/icons-react'

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 text-2xl h-screen">
      <IconExclamationCircleFilled />
      존재하지 않는 사용자입니다.
    </div>
  )
}

export default ErrorPage
