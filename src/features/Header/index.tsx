'use client'

import React from 'react'
import { Divider, Flex, Text } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'

interface HeaderProps {
  isBack?: boolean
  text: string
}

const Header = ({ isBack, text }: HeaderProps) => {
  const router = useRouter()
  const handleClick = () => {
    router.back()
  }

  return (
    <>
      <Flex align="center" pl={16} pr={16} pt={14} pb={14} gap={10}>
        <IconChevronLeft onClick={handleClick} />
        <Text size="lg" fw={500}>
          {text}
        </Text>
      </Flex>
      <Divider size={1} c={'gray'} />
    </>
  )
}

export default Header