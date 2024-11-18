import { signIn } from '@/auth'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'

const LoginPage = () => {
  return (
    <>
      <form
        action={async () => {
          'use server'
          await signIn('google')
        }}
      >
        <div class="flex flex-col gap-10 justify-center items-center h-screen">
          <h1 class="text-5xl font-bold">Shoo</h1>
          <Button>
            <Image src="/assets/logo-google.svg" alt="Google" width={20} height={20} />
            구글로 시작하기
          </Button>
        </div>
      </form>
    </>
  )
}

export default LoginPage
