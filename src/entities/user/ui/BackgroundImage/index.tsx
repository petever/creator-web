import React from 'react'
import { Group, Flex, Image } from '@mantine/core'
import { IconPhoto, IconVideo } from '@tabler/icons-react'
import classes from './styles.module.css'

interface BackgroundImageProps {
  cover: string | File
}

const BackgroundImage = ({ cover }: BackgroundImageProps) => {
  return (
    <div>
      {/* TODO  : Count있을 때에만 렌더 되어야 함. */}
      <Group align="center" gap={10} className={classes.countWrapper}>
        <Flex align="center" gap={10}>
          <IconVideo />
          12
        </Flex>
        <Flex align="center" gap={10}>
          <IconPhoto />
          12
        </Flex>
      </Group>
      <Image src={cover} height={300} />
    </div>
  )
}

export default BackgroundImage
