'use client'
import { Owner } from '@/shared/types'
import Image from 'next/image'
import { Dialog } from '@/shared/ui/dialog'
import { Avatar, AvatarImage } from '@/shared/ui/avatar'

interface LoginModalProps {
  owner?: Owner
  opened: boolean
  onClose: () => void
}

export const LoginModal = ({ owner, opened, onClose }: LoginModalProps) => {
  const handleLogin = async () => {
    // TODO : 로그인 로직 추가 필요
    // return await signIn('google')
  }

  if (!opened) return null

  return (
    <Dialog>
      <div className="flex flex-col items-center justify-center">
        {owner && (
          <div className="flex flex-col items-center justify-center gap-4 mb-10">
            <Avatar>
              <AvatarImage src={owner.picture as string} alt={''} />
            </Avatar>
            <p>{owner.displayName}님의 글 더 보기</p>
            <p>인플루언서의 사진과 동영상을 보려면 가입하세요.</p>
          </div>
        )}
        {/* TODO : Login 컴포넌트 분리 필요(form) */}
        <form onSubmit={handleLogin}>
          <button
            type="submit"
            className="flex items-center justify-center w-75 h-12 py-2 px-4 rounded  bg-white text-dark shadow"
          >
            <Image
              src="/assets/logo-google.svg"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="text-xl font-bold">구글로 시작하기</span>
          </button>
        </form>
      </div>
    </Dialog>
  )
}
