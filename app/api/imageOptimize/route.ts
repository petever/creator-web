import type { NextApiRequest, NextApiResponse } from 'next'
import formidable, {errors as formidableErrors} from 'formidable';

export const config = {
  api: {
    bodyParser: false
  }
}

export async function POST(request : NextApiRequest, response : NextApiResponse) {
  const form = formidable({
    maxFileSize : 5 * 1024 * 1024,
    keepExtensions : true
  })

  // const formData = await request.formData();
  // https://stackoverflow.com/questions/76112080/nextjs-13-api-to-handle-uploaded-files-does-not-work-using-formidable
  // https://github.com/vercel/next.js/issues/48875


  // form.parse(apiRequest, (err, fields, files) => {
  //   console.log('fields:', fields);
  //   console.log('files:', files);
  // });
  // const form  =new formidable.IncomingForm({
  //   maxFileSize : 5 * 1024 * 1024,
  //   keepExtensions : true
  // })


  return new Response(JSON.stringify({ message: 'Hello world logged!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}



