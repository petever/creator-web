'use client'
import { CommentArea } from '@/widgets'
import {FeedContents} from "@/entities/feeds/types";
import {Dialog, DialogContent, DialogTrigger} from "@/shared/ui/dialog";
import {Button} from "@/shared/ui/button";
import {IconMessageCircle} from "@tabler/icons-react";

interface FeedDetailProps {
  feed :  FeedContents
}
export const CommentListModal = ({ feed }: FeedDetailProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <IconMessageCircle size={'lg'}/>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <CommentArea id={feed.id}/>
      </DialogContent>
    </Dialog>
  )
}
