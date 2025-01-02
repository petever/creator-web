import LoginForm from '@/widgets/auth/ui/LoginForm'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: '크리에이터 구독',
}
const MainPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <div className="flex-1 relative hidden md:flex">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="flex flex-col items-center justify-center h-full">
              <Image src={'/assets/logo/SHU_logo_02.png'} alt="" width={472} height={94} />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <LoginForm />
        </div>
      </div>
      <div className="md:flex md:flex-col md:gap-4 justify-between p-5 bg-gray-50">
        <ul className="md:flex flex-col gap-1 text-sm text-gray-400">
          <li>Email: assistshushuk@gmail.com</li>
          <li>대표자 김승혁</li>
          <li>통신판매업신고번호</li>
          <li>사업자등록번호</li>
        </ul>
        <ul className="md:flex gap-2 text-sm text-gray-500">
          <li>
            <Link href="/terms">서비스 이용약관</Link>
          </li>
          <li>
            <Link href="/privacy">개인정보취급정책 </Link>
          </li>
          <li>
            <Link href="/operating">운영정책</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainPage
