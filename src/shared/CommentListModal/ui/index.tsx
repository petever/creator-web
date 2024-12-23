'use client'
import { CommentArea } from '@/widgets'
import { FeedContents } from '@/entities/feeds/types'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/shared/ui/dialog'
import { IconMessageCircle } from '@tabler/icons-react'
import React from "react";

interface FeedDetailProps {
  feed: FeedContents
}

export const CommentListModal = ({ feed }: FeedDetailProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconMessageCircle className="cursor-pointer hover:text-gray-500" size={24} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>댓글</DialogTitle>
        </DialogHeader>
        <CommentArea id={feed.id} />
      </DialogContent>
    </Dialog>
  )
}
