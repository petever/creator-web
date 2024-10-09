'use client'

import { Avatar, Button, Flex, Group, Box, Modal, Radio, Stack, Text } from '@mantine/core'
import classes from './styles.module.css'
import { IconStar } from '@tabler/icons-react'
import { UserProfile } from '@/entities/user/types'
import { Profile } from '@/features'

interface SubscribeModalProps {
  userProfile?: UserProfile
  opened: boolean
  onClose: () => void
}

export const SubscribeModal = ({ userProfile, opened, onClose }: SubscribeModalProps) => {
  if (!userProfile) return null

  const handleModalClose = () => {
    onClose()
  }

  const data = [
    {
      name: '구독하기',
    },
    { name: '월 / 10만원', description: '비공개 콘텐츠 제공' },
    { name: '월 / 100만원', description: '비공개 콘텐츠 제공/ 1:1 대화 가능' },
  ]

  const cards = data.map((item) => (
    <Radio.Card className={classes.root} radius="md" value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          {item.description && <Text className={classes.description}>{item.description}</Text>}
        </div>
      </Group>
    </Radio.Card>
  ))

  return (
    <Modal size="xl" centered opened={opened} onClose={handleModalClose} title="구독하기">
      <Radio.Group
        // value={value}
        // onChange={setValue}
        label={
          <Flex align="center" gap={10}>
            <Profile profile={userProfile} size={'lg'} />
          </Flex>
        }
        description={
          <Box mt={20}>
            <ul>
              {/* TODO : 에디터 이용하는게 좋아보임 */}
              <li>테스트 1</li>
              <li>테스트 1</li>
              <li>테스트 1</li>
              <li>테스트 1</li>
            </ul>
          </Box>
        }
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Radio.Group>

      <Text fz="xs" mt="md">
        {/*CurrentValue: {value || '–'}*/}
      </Text>
      <Button fullWidth>구독하기</Button>
    </Modal>
  )
}
