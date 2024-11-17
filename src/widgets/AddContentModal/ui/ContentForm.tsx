import { useFormContext} from 'react-hook-form'
import Image from 'next/image'
import Video from 'next-video';
import classes from "@/features/PreviewList/ui/styles.module.css";
import {Carousel, CarouselItem} from "@/shared/ui/carousel";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/shared/ui/select";
import {Input} from "@/shared/ui/input";

export const ContentForm = () => {
  const methods = useFormContext()
  const { control, getValues, setValue } = methods

  const { files, step } = getValues()

  if (step === 0) return null

  return (
    <div>
      <div className={'flex gap-30 h-96'}>
        <Carousel className={'w-full max-w-xs'}>
          {files.map((file, index) => {
            const isVideo = file.type === 'video/mp4'
            const url = URL.createObjectURL(file)
            return (
              <CarouselItem key={`image_${index}`}>
                {!isVideo ? (
                  <Image src={url} alt="" objectFit={'contain'} fill/>
                ) : (
                  <div className={classes.videoWrapper}>
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
      <div>
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
          name='isSubscribed'
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
