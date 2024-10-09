import { rem } from '@mantine/core'
import { IconUpload } from '@tabler/icons-react'
import { Dropzone } from '@mantine/dropzone'
export const DropzoneAccept = () => {
  return (
    <Dropzone.Accept>
      <IconUpload
        style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
        stroke={1.5}
      />
    </Dropzone.Accept>
  )
}
