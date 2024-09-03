import {Flex, Image} from "@mantine/core";
import {FeedButtons} from "../../../features";

export const Feed = () => {
  return (
    <Flex
      align="flex-start"
      direction='column'
      gap='sm'
    >
      <Image
        radius='md'
        height={400}
        fit="contain"
        src='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png'
      />
      <FeedButtons/>
    </Flex>
  )
}
