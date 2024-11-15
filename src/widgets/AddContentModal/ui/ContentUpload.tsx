'use client'
import React, {createRef} from 'react';
import PreviewList from '@/features/PreviewList/ui'
import Dropzone from 'react-dropzone';
import {useContentUpload} from "@/widgets/AddContentModal/hooks/useContentUpload";
const ContentUpload = () => {
  const {step, currentFile, dropzoneRef, handleDropImages, handleRemoveImage, handleChangeCurrentImage, handleOpenDialog} = useContentUpload()

  if (step > 0) return null

  return (
    <div>
      {!currentFile &&
        <Dropzone
          ref={dropzoneRef}
          accept={{
            'image/jpeg': [],
            'image/png': [],
            'image/webp' : [],
            'video/mp4': [],
          }}
          onDrop={acceptedFiles => handleDropImages(acceptedFiles)}>
          {({getRootProps, getInputProps}) => {
            return (
              <div {...getRootProps({className: 'dropzone'})} className='flex justify-center items-center h-60 mt-4 rounded-lg bg-slate-200'>
                <input {...getInputProps()} />
                <p>이미지나 동영상을 올려주세요.</p>
                <p>로딩중입니다.</p>
              </div>
            )
          }}
        </Dropzone>
      }
      <PreviewList
        onRemoveImage={handleRemoveImage}
        onShowImageChange={handleChangeCurrentImage}
        onImageUpload={handleOpenDialog}
      />
    </div>
  )
}
export default ContentUpload
