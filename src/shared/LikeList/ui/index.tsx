import {Dialog, DialogContent, DialogTrigger} from "@/shared/ui/dialog";
import {Button} from "@/shared/ui/button";
import {useState} from "react";

interface LikeListProps {
  likeCount : number
}

export const LkeList = ({ likeCount } : LikeListProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'}>
          좋아요 {likeCount}개 모두 보기
        </Button>
      </DialogTrigger>
      <DialogContent>
        좋아요 리스트 노출
      </DialogContent>
    </Dialog>
  )
}
