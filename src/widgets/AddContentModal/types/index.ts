export interface AddContentData {
  currentImage : string
  step : number
  currentIndex : number
  title : string
  contents : string
  files : File[],
  isPreview : boolean
  isSubscribed : 'false' | 'true'
}

export interface CreatePost {
  title : string
  contents : string
  isSubscribed : boolean
}
