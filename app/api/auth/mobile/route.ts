import { type NextRequest, NextResponse } from 'next/server'

export function GET(request: NextRequest, response: NextResponse) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('code')

  return window.location.replace(`shshsk://oauth?code=${query}`)
}
