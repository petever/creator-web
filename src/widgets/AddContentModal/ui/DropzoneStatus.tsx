import {useFormContext} from "react-hook-form";
import {ImagePlay, Loader} from "lucide-react";

export const DropzoneStatus = () => {
  const methods = useFormContext()
  const { watch } = methods
  const isLoading = watch('isLoading')
  const isFiles = !!watch('files').length

  if(isLoading) {
    return (
      <div className="flex flex-col items-center gap-4 justify-center">
        <Loader size={40}/>
      </div>
    )
  }

  if(!isFiles){
    return (
      <div className="flex flex-col items-center gap-4 justify-center">
        <ImagePlay size={40}/>
        이미지나 동영상을 올려주세요.
      </div>
    )
  }
  
  return (
    <div className='text-sm font-medium text-white cursor-pointer'>업로드</div>
  )
}