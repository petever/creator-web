'use client'

import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'
import { Button } from '@/shared/ui/button'
import { Checkbox } from '@/shared/ui/checkbox'
import { ApplyForCreator, SNS } from '@/entities/creators/types/applyForCreator'
import { useCreatorApply } from '@/entities/creators/hooks/useCreatorApply'
import { Input } from '@/shared/ui/input'
import { useToast } from '@/shared/hooks/use-toast'
import { useApplyForCreator } from '@/features/creators/hooks/useApplyForCreator'

interface CreatorApplyFormProps {
  initialData: ApplyForCreator
}

export interface ApplyForCreatorForm {
  terms: boolean
  sns: SNS[]
}

const CreatorApplyForm = ({ initialData }: CreatorApplyFormProps) => {
  const { toast } = useToast()
  const { data } = useCreatorApply(initialData)
  const { applyForCreatorMutate } = useApplyForCreator()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      terms: false,
      sns: [{ snsType: 'INSTAGRAM', snsId: '' }],
    },
  })
  const {
    fields: SNSFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: 'sns',
  })

  const MAX_SNS_COUNT = 5
  const MIN_SNS_COUNT = 1

  const isApplying = data?.creatorApplies?.length > 0

  const handleSnsAdd = () => {
    if (SNSFields.length >= MAX_SNS_COUNT) return
    append({ snsType: 'INSTAGRAM', snsId: '' })
  }

  const handleSnsRemove = (index: number) => {
    if (SNSFields.length === MIN_SNS_COUNT) return
    remove(index)
  }

  const handleApplyCreator = (data: ApplyForCreatorForm) => {
    const isTermValid = !data.terms
    const isSNSValid = !data.sns.every((sns) => sns.snsId)
    if (isTermValid) {
      return toast({
        title: '이용약관 동의를 체크해주세요.',
        variant: 'destructive',
      })
    }
    if (isSNSValid) {
      return toast({
        title: '모든 SNS 계정에 ID를 입력해주세요.',
        variant: 'destructive',
      })
    }

    applyForCreatorMutate(data.sns)
  }

  const onSubmit = (data: ApplyForCreatorForm) => {
    if (isApplying) {
      return console.log('already applying')
    }
    handleApplyCreator(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-3">
      <div className="flex flex-col gap-10">
        <div>
          <div className="flex justify-between items-center mb-2.5 py-2">
            <span className="text-sm font-medium">SNS 계정</span>
            <Button type="button" variant="outline" size="sm" onClick={handleSnsAdd}>
              추가
            </Button>
          </div>
          <div className="flex flex-col gap-2.5">
            {SNSFields.map((field, index) => {
              return (
                <div key={`sns-${index}`} className="flex gap-2">
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <Select defaultValue="INSTAGRAM" onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="선택" />
                        </SelectTrigger>
                        <SelectContent>
                          {['INSTAGRAM', 'YOUTUBE', 'FACEBOOK', 'AFREECA_TV', 'TWITTER'].map(
                            (platform, index) => (
                              <SelectItem key={`platform-${index}`} value={platform}>
                                {platform}
                              </SelectItem>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                    )}
                    name={`sns.${index}.snsType`}
                  />
                  <Controller
                    control={control}
                    render={({ field }) => <Input placeholder="계정" {...field} />}
                    name={`sns.${index}.snsId`}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleSnsRemove(index)}
                  >
                    삭제
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">크리에이터 신청 내역</span>
          <span className="text-sm">{isApplying ? '신청 중입니다.' : '신청내역이 없습니다.'}</span>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-sm font-medium">이용약관</span>
            <div className="flex items-center gap-2">
              <Controller
                control={control}
                render={({ field }) => (
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                )}
                name="terms"
              />
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
            {isApplying ? '신청 취소하기' : '크리에이터 신청하기'}
          </Button>
        </div>
      </div>
    </form>
  )
}

export default CreatorApplyForm
