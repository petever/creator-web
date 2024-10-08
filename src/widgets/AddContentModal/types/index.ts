export interface AddContentData {
  currentFile: string
  currentFileType: 'video' | 'image'
  step: number
  currentIndex: number
  title: string
  contents: string
  files: File[]
  isPreview: boolean
  isSubscribed: 'false' | 'true'
}
