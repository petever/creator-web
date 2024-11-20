import LoginForm from '@/widgets/auth/ui/LoginForm'

export const metadata = {
  title: '크리에이터 구독',
}
const MainPage = () => {
  return (
    <div className="flex flex-1 h-screen">
      <div
        className="flex-1 relative"
        style={{
          backgroundImage: 'url(/assets/visual.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/70">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-white text-9xl font-bold">Shushuk</h1>
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
