export type ImageOptimizeData = {
  buffer : BufferData
  name : string
  status : 'processed'
  type : 'image' | 'video'
}

type BufferData = {
  data : Buffer,
  type : 'buffer'
}
