import { Flex, Group, Input, Select, TextInput } from '@mantine/core'
import { useContentFormContext } from '@/widgets/AddContentModal/lib/form-context'
import { Carousel } from '@mantine/carousel'
import Image from 'next/image'
import Video from 'next-video';
import classes from "@/features/PreviewList/ui/styles.module.css";

export const ContentForm = () => {
  const form = useContentFormContext()
  const { values, setFieldValue } = form

  const { files, step, title, contents } = values

  if (step === 0) return null

  return (
    <Group>
      <Flex flex={1} gap={30}>
        <Flex direction="column" gap={30} flex={1}>
          <Carousel withIndicators height={200}>
            {files.map((file, index) => {
              const isVideo = file.type === 'video/mp4'
              const url = URL.createObjectURL(file)

              return (
                <Carousel.Slide key={`image_${index}`}>
                  {!isVideo ? (
                    <Image src={url} alt="" objectFit={'contain'} fill/>
                  ) : (
                    <div className={classes.videoWrapper}>
                      <Video
                        src={url} // 비디오 파일 경로
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false}
                      ></Video>
                    </div>
                  )}
                </Carousel.Slide>
              )
            })}
          </Carousel>
        </Flex>
        <Flex direction="column" gap={30} flex={1}>
          <Input.Wrapper>
            <TextInput label="제목" key={form.key('title')} {...form.getInputProps('title')} />
          </Input.Wrapper>
          <Input.Wrapper>
            <TextInput
              label="콘텐츠"
              key={form.key('contents')}
              {...form.getInputProps('contents')}
            />
          </Input.Wrapper>
          <Input.Wrapper>
            {/* 구독 권한 조회 후, option에 들어갈 수 있도록 해야 함.*/}
            <Select
              label="공개 범위"
              data={[
                {
                  label: '구독자 전용',
                  value: 'true',
                },
                {
                  label: '전체 공개',
                  value: 'false',
                },
              ]}
              key={form.key('isSubscribed')}
              {...form.getInputProps('isSubscribed')}
              defaultValue="false"
            />
          </Input.Wrapper>
        </Flex>
      </Flex>
    </Group>
  )
}
