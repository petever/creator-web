'use client'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'
import { Button } from '@/shared/ui/button'
import { Checkbox } from '@/shared/ui/checkbox'
import { Input } from '@/shared/ui/input'
import { applyForCreator } from '@/features/creators/api/applyForCreator'

const CreatorApplyForm = () => {
  const MAX_SNS_COUNT = 5
  const MIN_SNS_COUNT = 1
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      sns: [{ snsType: 'INSTAGRAM', snsId: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sns',
  })

  const handleSnsAdd = () => {
    if (fields.length >= MAX_SNS_COUNT) return
    append({ snsType: 'INSTAGRAM', snsId: '' })
  }

  const handleSnsRemove = (index: number) => {
    if (fields.length === MIN_SNS_COUNT) return
    remove(index)
  }

  const onSubmit = (data: any) => {
    applyForCreator(data.sns)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      <div className="flex flex-col gap-10">
        <div>
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-sm font-medium">SNS 계정</span>
            <Button variant="outline" size="sm" onClick={handleSnsAdd}>
              추가
            </Button>
          </div>
          <div className="flex flex-col gap-2.5">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2">
                <Select defaultValue="INSTAGRAM" {...register(`sns.${index}.snsType`)}>
                  <SelectTrigger>
                    <SelectValue placeholder="선택" />
                  </SelectTrigger>
                  <SelectContent>
                    {['INSTAGRAM', 'YOUTUBE', 'FACEBOOK', 'AFREECA_TV', 'TWITTER', 'FACEBOOK'].map(
                      (platform) => (
                        <SelectItem key={platform} value={platform}>
                          {platform}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
                <Input placeholder="계정" {...register(`sns.${index}.snsId`)} />
                <Button variant="outline" size="sm" onClick={() => handleSnsRemove(index)}>
                  삭제
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">크리에이터 신청 내역</span>
          <span className="text-sm">신청내역이 없습니다.</span>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-sm font-medium">이용약관</span>
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-xs font-medium">
                동의
              </label>
            </div>
          </div>
          <p className="text-sm">
            이용약관 및 개인정보처리방침에 동의하며, 19세 이상임을 확인합니다. (I agree to the Terms
            of Service and Privacy Policy, and confirm that I am at least 18 years old.)
          </p>
          <Button className="w-full mt-5 rounded-lg font-medium" type="submit">
            크리에이터 전환
          </Button>
        </div>
      </div>
    </form>
  )
}

export default CreatorApplyForm
