import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'

export async function POST(request: NextRequest) {
  const formData = await request.formData()

  const files = formData.getAll('file') as File[]

  if (files.length < 1) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 })
  }

  const processedFiles = await Promise.all(
    files.map(async (file, index) => {
      const buffer = await file.arrayBuffer()
      const processedBuffer = await sharp(Buffer.from(buffer))
        .resize(600, 600, { fit: 'contain' })
        .toBuffer()

      return { name: `upload_file_${index}`, status: 'processed', buffer: processedBuffer }
    }),
  )

  return NextResponse.json({
    status: 'success',
    data: {
      files: processedFiles,
    },
    message: '파일 변환 성공',
  })
}
