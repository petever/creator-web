import {Flex, Group, Input, TextInput} from "@mantine/core";
import {useContentFormContext} from "@/widgets/AddContentModal/lib/form-context";
import {Carousel} from "@mantine/carousel";
import Image from "next/image";

export const ContentForm = () => {
  const form = useContentFormContext()
  const {values, setFieldValue} = form

  const {files, step} = values
  console.log(files)

  if(step === 0) return null

  return (
    <Group>
      <Flex>
        <Carousel withIndicators height={200}>
          {
            files.map((file, index) => {
              const imageUrl = URL.createObjectURL(file);
              return (
                <Carousel.Slide key={`image_${index}`}>
                  <Image src={imageUrl} alt='' width={200} height={200}/>
                </Carousel.Slide>
              )
            })
          }
        </Carousel>
        <Flex
          direction='column'
        >
          <Input.Wrapper label="Input label" description="Input description" error="Input error">
            <TextInput
              label="제목"
              key={form.key('title')}
              {...form.getInputProps('title')}
            />
          </Input.Wrapper>
          <Input.Wrapper label="Input label" description="Input description" error="Input error">
            <TextInput
              label="콘텐츠"
              key={form.key('contents')}
              {...form.getInputProps('contents')}
            />
          </Input.Wrapper>
        </Flex>
      </Flex>
    </Group>
  )
}
