'use client'
import { useFormContext } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import { AddContentData } from '@/widgets/AddContentModal/types'
import { Editor } from '@/shared/ui/Editor'
import React from 'react'
import { useSubscribePlans } from '@/entities/subscribe/hooks/useSubscribePlans'
import { useSession } from 'next-auth/react'
import { Switch } from '@/shared/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'

export const ContentForm = () => {
  const session = useSession()
  const { data: plans } = useSubscribePlans(session.data?.user?.id)

  const methods = useFormContext<AddContentData>()
  const { control, watch } = methods

  return (
    <div className="flex flex-1 flex-col gap-5 mt-4">
      <FormField
        control={control}
        name="contents"
        render={({ field }) => (
          <FormItem>
            <FormLabel>콘텐츠</FormLabel>
            <FormControl>
              <Editor {...field} height="150px" placeholder="콘텐츠를 입력해주세요." />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="isPublic"
        render={({ field }) => {
          return (
            <FormItem className="flex items-center gap-2">
              <FormLabel>전체 공개 여부</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  style={{ margin: 0 }}
                />
              </FormControl>
            </FormItem>
          )
        }}
      />
      {!watch('isPublic') && (
        <FormField
          control={control}
          name="planId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>플랜 선택</FormLabel>
              <FormControl>
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="콘텐츠가 공개될 구독제를 선택해주세요." />
                  </SelectTrigger>
                  <SelectContent>
                    {plans?.map((plan) => (
                      <SelectItem key={plan.id} value={plan.id}>
                        {plan.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
      )}
    </div>
  )
}
