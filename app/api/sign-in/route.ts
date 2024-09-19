import { login } from '@/features/users/api/login'

export async function POST(request: Request) {
  const result = await login(await request.json())
  console.log(result, 'result')
  return Response.json({
    message: 'Hello world',
  })
}
