'use client'

import React from 'react'
import { Box, Button, Checkbox, Flex, Input, Select, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import classes from './styles.module.css'

const CreatorApplyForm = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: [{ sns: 'instagram', account: '' }],
  })

  return (
    <Flex mt={20} direction="column" gap={40}>
      <Box>
        <Flex gap={8} justify="space-between">
          <Text size="sm" fw={500} mb={10}>
            SNS 계정
          </Text>
          <Button size="compact-xs">추가</Button>
        </Flex>
        <Flex gap={8}>
          <Select
            placeholder="ID"
            defaultValue="instagram"
            data={['instagram', 'youtube', 'tiktok', 'afreecatv', 'twitter', 'facebook']}
            allowDeselect={false}
            flex={1}
          />
          <Input placeholder="SNS 계정을 입력해주세요." flex={2} />
        </Flex>
      </Box>
      <Flex justify="space-between">
        <Text size="sm" fw={500} mb={10}>
          크리에이터 신청 내역
        </Text>
        <Text size="sm">신청내역이 없습니다.</Text>
      </Flex>
      <Box>
        <Flex justify="space-between" align="center">
          <Text size="sm" fw={500} mb={10}>
            이용약관
          </Text>
          <Checkbox label="동의" fw={500} size="xs" />
        </Flex>
        <Text className={classes.terms} size="sm">
          이용약관 및 개인정보처리방침에 동의하며, 19세 이상임을 확인합니다. (I agree to the Terms
          of Service and Privacy Policy, and confirm that I am at least 18 years old.)
        </Text>
        <Button fullWidth size="md" mt={20} fw={500} radius={10}>
          크리에이터 전환
        </Button>
      </Box>
    </Flex>
  )
}

export default CreatorApplyForm
