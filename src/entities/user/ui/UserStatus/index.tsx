import classes from './stlyes.module.css'
import { ActionIcon, Flex } from '@mantine/core'
import { IconCircleArrowDownFilled, IconCircleArrowUpFilled } from '@tabler/icons-react'
import { useState } from 'react'
import parse from 'html-react-parser'

interface UserStatusProps {
  status: string
}
export const UserStatus = ({ status }: UserStatusProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleExpandedChange = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <div className={`${classes.status} ${!isExpanded && classes.isExpanded}`}>
        {parse(status)}
      </div>
      <Flex justify={'end'}>
        <ActionIcon onClick={handleExpandedChange}>
          {isExpanded ? (
            <IconCircleArrowUpFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
          ) : (
            <IconCircleArrowDownFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
          )}
        </ActionIcon>
      </Flex>
    </>
  )
}
