'use client'

import {Group, Text, rem, SimpleGrid, ActionIcon, Button} from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import {Dropzone, DropzoneProps, FileWithPath, IMAGE_MIME_TYPE} from '@mantine/dropzone';
import {useRef, useState} from "react";
import Image from "next/image";
import classes from './styles.module.css'

export const ImageUpload = (props: Partial<DropzoneProps>) => {
  const [image, setImage] = useState('')
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const openRef = useRef<() => void>(null);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <li>
        <Image key={index} src={imageUrl} alt='' fill />
      </li>
    )
  });

  const handleDropImages = (files : FileWithPath[]) => {
    setFiles(files)
    const file = files[0]
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl)
  }

  return (
    <div>
      {!image &&
        <Dropzone
          onDrop={handleDropImages}
          maxSize={5 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          {...props}
          openRef={openRef}
        >
          <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
            <Dropzone.Accept>
              <IconUpload
                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto
                style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                사진과 동영상을 여기에 끌어다 놓으세요
              </Text>
            </div>
          </Group>
        </Dropzone>
      }
      {image &&
        <div className={classes.imageWrapper}>
          <Image src={image} alt={''} fill/>
          <div className={classes.imageUploadArea}>
            <Button onClick={() => openRef.current?.()}>Select files</Button>
            <ul className={classes.imageListsWrapper}>
              {previews}
            </ul>
          </div>
        </div>
      }
    </div>
  )
}
