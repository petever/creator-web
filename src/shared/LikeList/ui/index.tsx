import classes from "@/shared/FeedDetail/ui/styles.module.css";
import {Profile} from "@/features";
import {FeedContents, Resource} from "@/entities/feeds/types";
import {CommentArea} from "@/widgets";
import {Button, Modal} from "@mantine/core";
import {DUMMY_PROFILE} from "@/shared/model";

interface LikeListProps {
  title?: string | React.ReactNode
  opened: boolean
  onClose: () => void
}
export const LkeList = ({title, opened, onClose} : LikeListProps) => {
  return (
    <Modal size="lg" opened={opened} onClose={onClose} centered withCloseButton={false}>
      <Profile profile={DUMMY_PROFILE} size="sm">
        <Button>구독하기</Button>
      </Profile>
    </Modal>
  )
}
