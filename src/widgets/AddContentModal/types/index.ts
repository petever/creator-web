export interface AddContentData {
  currentFile: string
  currentFileType: 'video' | 'image' | ''
  step: number
  currentIndex: number
  title: string
  contents: string
  files: File[]
  isPreview: boolean
  isLoading : boolean
  isSubscribed: 'false' | 'true'
}

export type DropzoneRef = {
  open: () => void
}
