import type { NextApiRequest, NextApiResponse } from 'next'
import formidable, {errors as formidableErrors} from 'formidable';

type ResponseData = {
  message: string
}

export async function POST(request : NextApiRequest, response : NextApiResponse) {
  const form = formidable({});

  return new Response(JSON.stringify({ message: 'Hello world logged!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}



