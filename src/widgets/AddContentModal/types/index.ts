export interface AddContentData {
  currentFile : string
  currentFileType : 'video' | 'image'
  step : number
  currentIndex : number
  title : string
  contents : string
  files : File[],
  isPreview : boolean
  isSubscribed : 'false' | 'true'
}

export interface AddContentPayloadData {
  postRequest : {
    title : string
    contents : string
    isSubscribed : boolean
  },
  files : FormData
}
