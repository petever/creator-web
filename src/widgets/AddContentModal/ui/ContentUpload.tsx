'use client'
import { useRef } from 'react'
import PreviewList from '@/features/PreviewList/ui'
import Dropzone from 'react-dropzone'
import { useFormContext } from 'react-hook-form'
import { DropzoneRef } from '@/widgets/AddContentModal/types'
import { ImagePlay, Loader } from 'lucide-react'

interface ContentUploadProps {
  onDropImage: (uploadFiles: File[]) => void
  onRemoveImage: (index: number) => void
  onShowImageChange: (url: string, index: number, type: 'video' | 'image') => void
}

const ContentUpload = ({ onDropImage, onRemoveImage, onShowImageChange }: ContentUploadProps) => {
  const dropzoneRef = useRef<DropzoneRef>()

  const methods = useFormContext()
  const { getValues, watch } = methods
  const isLoading = watch('isLoading')

  const { currentFile, files, step } = getValues()
  if (step > 0) return null

  const handleOpenDialog = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.open()
    }
  }

  return (
    <div>
      {!currentFile && (
        <Dropzone
          ref={dropzoneRef}
          accept={{
            'image/jpeg': [],
            'image/png': [],
            'image/webp': [],
            'video/mp4': [],
          }}
          onDrop={(acceptedFiles) => onDropImage(acceptedFiles)}
        >
          {({ getRootProps, getInputProps }) => {
            return (
              <div
                {...getRootProps({ className: 'dropzone' })}
                className="flex justify-center items-center h-60 mt-4 rounded-lg bg-slate-200 cursor-pointer"
              >
                <input {...getInputProps()} />
                {isLoading ? (
                  <div className="flex flex-col items-center gap-4 justify-center">
                    <Loader size={40} />
                    로딩중입니다.
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4 justify-center">
                    <ImagePlay size={40} />
                    이미지나 동영상을 올려주세요.
                  </div>
                )}
              </div>
            )
          }}
        </Dropzone>
      )}
      <PreviewList
        onRemoveImage={onRemoveImage}
        onShowImageChange={onShowImageChange}
        onOpenDropzone={handleOpenDialog}
      />
    </div>
  )
}
export default ContentUpload
