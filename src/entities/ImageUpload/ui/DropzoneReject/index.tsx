import { rem } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import { Dropzone } from '@mantine/dropzone'
export const DropzoneReject = () => {
  return (
    <Dropzone.Reject>
      <IconX
        style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
        stroke={1.5}
      />
    </Dropzone.Reject>
  )
}
