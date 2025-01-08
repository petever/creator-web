import { NextRequest, NextResponse } from 'next/server'

export default async function handler(req: NextRequest, res: NextResponse) {
  console.log(req, 'mobile req')
  console.log(res, 'mobile res')
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  window.location.replace(`shshsk://oauth?code=${code}`)
}
