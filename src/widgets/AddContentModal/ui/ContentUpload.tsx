'use client'
import { useRef } from 'react'
import PreviewList from '@/features/PreviewList/ui'
import Dropzone, {useDropzone} from 'react-dropzone'
import { useFormContext } from 'react-hook-form'
import { DropzoneRef } from '@/widgets/AddContentModal/types'
import {ImagePlay, ImageUp, Loader} from 'lucide-react'
import {Button} from "@/shared/ui/button";
import {DropzoneStatus} from "@/widgets/AddContentModal/ui/DropzoneStatus";

interface ContentUploadProps {
  onDropImage: (uploadFiles: File[]) => void
  onRemoveImage: (index: number) => void
}

const ContentUpload = ({ onDropImage, onRemoveImage }: ContentUploadProps) => {
  const methods = useFormContext()
  const { getValues, watch } = methods
  const isLoading = watch('isLoading')

  const { currentFile, step } = getValues()

  const dropzoneStyle = currentFile ? `
    flex
    items-center
    justify-center
    w-12 h-12
    absolute bottom-2.5 right-2.5
    rounded-lg
    bg-theme-blue-600
    z-10` :
    `flex 
    justify-center 
    items-center 
    h-80 
    mt-4 
    rounded-lg 
    bg-slate-200 
    cursor-pointer
    `

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
          return (
            <div
              {...getRootProps({className: 'dropzone'})}
              className={dropzoneStyle}
            >
              <input {...getInputProps()} />
              <DropzoneStatus/>
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
