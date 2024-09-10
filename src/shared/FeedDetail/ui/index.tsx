'use client'
import { Modal, Image } from '@mantine/core'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {CommentInput} from "@/features";
import {CommentArea} from "@/widgets";

interface FeedDetailProps {
  title?: string | React.ReactNode
  opened: boolean
  onClose: () => void
}
export const FeedDetail = ({ opened, onClose }: FeedDetailProps) => {
  return (
    <Modal title={<>test</>} size="lg" opened={opened} onClose={onClose} centered>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation={false}
      >
        <SwiperSlide>
          <Image
            radius="md"
            fit="contain"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
          />
        </SwiperSlide>
      </Swiper>
			<CommentArea/>
    </Modal>
  )
}
