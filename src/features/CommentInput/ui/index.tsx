import { IconSend } from '@tabler/icons-react'
import { useAddComment } from '@/features/CommentInput/hooks/useAddComment'
import {Button} from "@/shared/ui/button";
import {Input} from "@/shared/ui/input";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/ui/form";
import {useForm} from "react-hook-form";

interface CommentInputProps {
  id: string
}

export const CommentInput = ({ id }: CommentInputProps) => {
  const methods = useForm({
    defaultValues: {
      contents: '',
    },
  })
  const { register, handleSubmit } = methods

  const { addCommentMutate } = useAddComment(id)

  const onSubmit = (values : { contents : string }) => {
    const { contents } = values
    if (!contents) return

    addCommentMutate(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex gap-2'>
        <div className='flex-[80%]'>
          <Input placeholder="댓글을 입력해주세요." {...register("contents", { required: true })} />
        </div>
        <Button type='submit'>
          <IconSend />
        </Button>
      </div>
    </form>
  )
}
