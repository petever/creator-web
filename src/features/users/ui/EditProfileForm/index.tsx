'use client'

import { Box, Textarea, TextInput, Image, Avatar } from '@mantine/core'

export const EditProfileForm = () => {
  return (
    <form>
      <Image
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
        height={180}
      />

      <Box pr={16} pl={16}>
        <Avatar bg="blue" w={80} h={80} mt={-30} mb={20} />
        <TextInput
          withAsterisk
          label="표시 이름"
          // key={form.key('displayName')}
          // {...form.getInputProps('displayName')}
          size="lg"
        />
        <TextInput
          withAsterisk
          label="사용자 이름"
          // key={form.key('userName')}
          // {...form.getInputProps('userName')}
          mt={10}
          size="lg"
        />
        <Textarea
          mt={10}
          label="소개"
          // key={form.key('introduce')}
          // {...form.getInputProps('introduce')}
          size="lg"
        />
      </Box>
    </form>
  )
}
