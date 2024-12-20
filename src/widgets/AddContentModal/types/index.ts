export interface ContentFile {
  name: string
  type: string
  file: File
  url?: string
}

export interface AddContentData {
  currentFile: string
  currentFileType: 'video' | 'image' | ''
  step: number
  currentIndex: number
  title: string
  contents: string
  files: { name: string; type: string; file: File; url?: string }[]
  isPreview: boolean
  isLoading: boolean
  isPublic: boolean
  planId: string
}

export type DropzoneRef = {
  open: () => void
}
