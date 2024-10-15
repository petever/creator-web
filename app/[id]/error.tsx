'use client'

import React from 'react'
import {IconExclamationCircleFilled} from "@tabler/icons-react";
import classes from './styles.module.css'

const ErrorPage = () => {
  return (
    <div className={classes.errorWrapper}>
      <IconExclamationCircleFilled />
      존재하지 않는 사용자입니다.
    </div>
  )
}

export default ErrorPage
