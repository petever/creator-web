import { useFormContext } from 'react-hook-form'
import Image from 'next/image'
import Video from 'next-video'
import { Carousel, CarouselItem } from '@/shared/ui/carousel'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'
import { Input } from '@/shared/ui/input'
import {AddContentData} from "@/widgets/AddContentModal/types";

export const ContentForm = () => {
  const methods = useFormContext<AddContentData>()
  const { control, getValues, setValue } = methods

  const { files, step } = getValues()

  if (step === 0) return null

  return (
    <div className={'flex gap-10 h-[600px]'}>
      <div className={'flex flex-1 gap-30 h-full'}>
        <Carousel className={'w-full max-w-xs'}>
          {files.map((file, index) => {
            const isVideo = file.type === 'video/mp4'
            const url = URL.createObjectURL(file)
            return (
              <CarouselItem key={`image_${index}`} className="h-full p-0">
                {!isVideo ? (
                  <Image src={url} alt="" objectFit={'contain'} fill />
                ) : (
                  <div className="flex h-full justify-center relative bg-black">
                    <Video
                      src={url} // 비디오 파일 경로
                      autoPlay={false}
                      muted
                      loop
                      playsInline
                      controls={false}
                    ></Video>
                  </div>
                )}
              </CarouselItem>
            )
          })}
        </Carousel>
      </div>
      <div className="flex flex-1 flex-col gap-5">
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>제목</FormLabel>
              <FormControl>
                <Input placeholder="제목을 입력해주세요." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contents"
          render={({ field }) => (
            <FormItem>
              <FormLabel>콘텐츠</FormLabel>
              <FormControl>
                <Input placeholder="콘텐츠를 입력해주세요." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="isSubscribed"
          render={({ field }) => (
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>
    </div>
  )
}
