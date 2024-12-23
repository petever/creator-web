import LoginForm from '@/widgets/auth/ui/LoginForm'
import Image from "next/image";

export const metadata = {
  title: '크리에이터 구독',
}
const MainPage = () => {
  return (
    <div className="flex flex-1 h-screen ">
      <div
        className="flex-1 relative hidden md:flex"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="flex flex-col items-center justify-center h-full">
            <Image src={"/assets/logo/SHU_logo_02.png"} alt='' width={472} height={94}/>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <LoginForm />
      </div>
    </div>
  )
}

export default MainPage
