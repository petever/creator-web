'use client'
import { Modal, Image} from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import '@mantine/carousel/styles.css';
import { CommentArea } from '@/widgets'

interface FeedDetailProps {
  title?: string | React.ReactNode
  opened: boolean
  onClose: () => void
}
export const FeedDetail = ({ opened, onClose }: FeedDetailProps) => {
  return (
    <Modal title={<>test</>} size="lg" opened={opened} onClose={onClose} centered>
      <Carousel withIndicators>
        <Carousel.Slide>
          <Image
            radius="md"
            fit="contain"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
          />
        </Carousel.Slide>
      </Carousel>
      <CommentArea />
    </Modal>
  )
}
