export interface AddContentData {
  currentFile: string
  currentFileType: 'video' | 'image' | ''
  step: number
  currentIndex: number
  title: string
  contents: string
  files: { name : string, type : string, file : File }[]
  isPreview: boolean
  isLoading : boolean
  isSubscribed: 'false' | 'true'
}

export type DropzoneRef = {
  open: () => void
}
