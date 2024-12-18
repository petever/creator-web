import Player from 'next-video/player'

interface VideoPlayerProps {
  src: string
  isControl?: boolean
  viewType?: 'row' | 'grid'
}

export const VideoPlayer = ({ src, isControl = false, viewType = 'row' }: VideoPlayerProps) => {
  if(viewType === 'grid') {
    return (
      <div className='w-full h-0 pt-[100%] bg-gray-200'>
      </div>
    )
  }

  return (
    <div className="flex max-h-[640px] justify-center relative bg-black md:h-full">
      <Player
        src={src}
        autoPlay={false}
        muted
        loop
        playsInline
        controls={isControl}
        accentColor={'#2B64F5'}
      />
    </div>
  )
}
