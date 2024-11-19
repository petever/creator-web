import Player from 'next-video/player'

interface VideoPlayerProps {
  src: string
  isControl?: boolean
}
export const VideoPlayer = ({ src, isControl = false }: VideoPlayerProps) => {
  return (
    <div className="flex h-[600px] justify-center relative bg-black">
      <Player
        src={src}
        autoPlay={false}
        muted
        loop
        playsInline
        controls={isControl}
        accentColor={'#ffb01b'}
      />
    </div>
  )
}
