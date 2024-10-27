import {Box, Divider} from '@mantine/core'
import { Comment, CommentInput } from '@/features'
import classes from './styles.module.css'

interface CommentAreaProps {
  id : string
}
export const CommentArea = ({ id }: CommentAreaProps) => {
  return (
    <Box>
      <h3>댓글</h3>
      <Divider mt={10}/>
      <div className={classes.wrapper}>
        <Comment id={id}/>
      </div>
      <CommentInput id={id}/>
    </Box>
  )
}
