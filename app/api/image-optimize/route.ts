import {NextRequest, NextResponse} from "next/server";
import sharp from "sharp";

export async function POST(request : NextRequest, response : NextResponse) {
  const formData = await request.formData()

  const files = formData.getAll('file') as File[]
  if (files.length < 1) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 })
  }

  const processedFiles = await Promise.all(
    files.map(async (file) => {
      const buffer = await file.arrayBuffer()
      const processedBuffer = await sharp(Buffer.from(buffer))
        .resize(800, 800,  { fit: 'contain' })
        .toFormat('jpeg', {
          quality : 80
        })
        .toBuffer()

      return { name: file.name, status: 'processed', buffer: processedBuffer }
    }),
  )

  return NextResponse.json({
    status: 'success',
    message: '파일 업로드 성공',
  })
}



