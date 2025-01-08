import { type NextRequest, NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

export function GET(request: NextRequest, response: NextResponse) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('code')

  redirect(`shshsk://oauth?code=${query}`)
}
