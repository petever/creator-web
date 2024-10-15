import {ActionIcon, Box, Button, Flex, Group, Text} from "@mantine/core";
import {getDateFormat} from "@/shared/lib";
import {IconCircleArrowDownFilled, IconCircleArrowUpFilled} from "@tabler/icons-react";
import {useState} from "react";
import classes from './stlyes.module.css'

interface FeedContentProps {
  contents : string
  createdAt: Date
}

export const FeedContent = ({contents, createdAt} : FeedContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const handleExpandedChange = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Box p={14}>
      <Flex
        justify={'space-between'}
        align={'end'}
      >
        <div className={classes.wrapper}>
          <p className={`${classes.contents} ${!isExpanded && classes.isExpanded}`}>{contents}</p>
          <Text size="xs" c="dimmed" mt={10}>{getDateFormat(createdAt)} 작성됨</Text>
        </div>
        <ActionIcon onClick={handleExpandedChange}>
          {isExpanded ? (
            <IconCircleArrowUpFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
          ) : (
            <IconCircleArrowDownFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
          )}
        </ActionIcon>
      </Flex>
    </Box>
  )
}
