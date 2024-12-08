import {Dialog, DialogContent, DialogTitle, DialogTrigger} from "@/shared/ui/dialog";
import {Button} from "@/shared/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/ui/form";
import React from "react";
import {useForm} from "react-hook-form";
import {withdraw} from "@/features/users/api/withdraw";
import {Input} from "@/shared/ui/input";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "@/shared/hooks/use-toast";
import {useWithDraw} from "@/features/users/hooks/useWithDraw";

export const WithDrawModal = () => {

  const schema = z.object({
    confirmText: z.literal("탈퇴하겠습니다"),
  })

  const form = useForm({
    defaultValues : {
      confirmText : '',
    },
    resolver: zodResolver(schema)
  })

  const {
    control,
    formState: { errors, isValid },
  } = form

  const { withDrawMutation } = useWithDraw()

  const handleWithdrawMember = () => {
    withDrawMutation()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className='px-0'>회원탈퇴</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogContent>
          <DialogTitle>회원 탈퇴</DialogTitle>
          <div className='p-2 rounded-sm bg-gray-300'>
            <h3 className='mb-4 font-semibold'>탈퇴하시기 전에 아래 정보를 확인해 주세요.</h3>
            <ul className='flex flex-col gap-2 text-sm break-words'>
              <li>회원에서 탈퇴하시면 현재 사용 중인 계정을 더 이상 사용할 수 없게 됩니다.</li>
              <li>한번 삭제된 계정은 이전 상태로 복구할 수 없습니다.</li>
            </ul>
          </div>
          <FormField
            control={control}
            name="confirmText"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="탈퇴하겠습니다. 입력해주세요." {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="button" disabled={!isValid} className="w-full" onClick={handleWithdrawMember}>회원 탈퇴</Button>
        </DialogContent>
      </DialogContent>
    </Dialog>
  )
}