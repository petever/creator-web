'use client'
import { useFormContext } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'
import { Input } from '@/shared/ui/input'
import {AddContentData} from "@/widgets/AddContentModal/types";
import { Editor } from '@/shared/ui/Editor'
import React from "react";
import {useSubscribePlans} from "@/entities/subscribe/hooks/useSubscribePlans";
import {auth} from "@/auth";
import {useSession} from "next-auth/react";

export const ContentForm = () => {
  const session = useSession()
  const { data: plans } = useSubscribePlans(session.data?.user?.id)

  const methods = useFormContext<AddContentData>()
  const { control, getValues, setValue } = methods

  return (
    <div className="flex flex-1 flex-col gap-5 mt-4">
      <FormField
        control={control}
        name="contents"
        render={({ field }) => (
          <FormItem>
            <FormLabel>콘텐츠</FormLabel>
            <FormControl>
              <Editor
                {...field}
                height="150px"
                placeholder="콘텐츠를 입력해주세요."
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="isSubscribed"
        render={({ field }) => (
          <FormItem>
            <FormLabel>공개 여부 선택</FormLabel>
            <FormControl>
              <Select defaultValue={'all'}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="콘텐츠가 공개될 구독제를 선택해주세요." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  {plans?.map((plan) => (
                    <SelectItem
                      key={plan.id}
                      value={plan.id}
                    >
                      {plan.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  )
}
