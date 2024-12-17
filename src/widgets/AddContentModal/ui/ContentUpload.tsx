'use client'
import { useRef } from 'react'
import PreviewList from '@/features/PreviewList/ui'
import Dropzone, {useDropzone} from 'react-dropzone'
import { useFormContext } from 'react-hook-form'
import { DropzoneRef } from '@/widgets/AddContentModal/types'
import {ImagePlay, ImageUp, Loader} from 'lucide-react'
import {Button} from "@/shared/ui/button";

interface ContentUploadProps {
  onDropImage: (uploadFiles: File[]) => void
  onRemoveImage: (index: number) => void
}

const ContentUpload = ({ onDropImage, onRemoveImage }: ContentUploadProps) => {
  const methods = useFormContext()
  const { getValues, watch } = methods
  const isLoading = watch('isLoading')
  const dropzone = useDropzone()

  const { currentFile, files, step } = getValues()
  if (step > 0) return null

  return (
    <div className='relative'>
      <Dropzone
        accept={{
          'image/jpeg': [],
          'image/png': [],
          'image/webp': [],
          'video/mp4': [],
        }}
        onDrop={(acceptedFiles) => onDropImage(acceptedFiles)}
      >
        {({ getRootProps, getInputProps }) => {
          if(currentFile) {
            return (
              <div
                {...getRootProps({className: 'dropzone'})}
                className='
                  flex
                  items-center
                  justify-center
                  w-12 h-12
                  absolute bottom-2.5 right-2.5
                  rounded-lg
                  bg-theme-blue-600
                  z-10
                '
              >
                <ImageUp />
                <input {...getInputProps()} />
              </div>
            )
          }

          return (
            <div
              {...getRootProps({className: 'dropzone'})}
              className="flex justify-center items-center h-80 mt-4 rounded-lg bg-slate-200 cursor-pointer"
            >
              <input {...getInputProps()} />
              {isLoading ? (
                <div className="flex flex-col items-center gap-4 justify-center">
                  <Loader size={40}/>
                  로딩중입니다.
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4 justify-center">
                  <ImagePlay size={40}/>
                  이미지나 동영상을 올려주세요.
                </div>
              )}
            </div>
          )
        }}
      </Dropzone>
      <PreviewList
        onRemoveImage={onRemoveImage}
      />
    </div>
  )
}
export default ContentUpload
