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
      if (file.type.includes('image')) {
        // 1:1
        // 16:9
        const processedBuffer = await sharp(Buffer.from(buffer))
          .resize(600, 600, { fit: 'contain' })
          .toBuffer()

        return {
          name: `upload_image_${index}`,
          status: 'complete',
          buffer: processedBuffer,
          type: 'image',
        }
      }

      return {
        name: `upload_video_${index}`,
        status: 'complete',
        buffer: Buffer.from(buffer),
        type: 'video',
      }
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
