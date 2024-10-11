export type ImageOptimizeData = {
  buffer: BufferData
  name : string
  status : 'processed'
}

type BufferData = {
  data : Buffer,
  type : 'buffer'
}