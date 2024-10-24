import Player from 'next-video/player';
import classes from './styles.module.css'

interface VideoPlayerProps {
  src : string
  isControl ?: boolean
}
export const VideoPlayer = ({src, isControl = false} : VideoPlayerProps) => {
  return (
    <div className={classes.videoWrapper}>
      <Player
        src={src}
        autoPlay
        muted
        loop
        playsInline
        controls={isControl}
        accentColor={'#ffb01b'}
      />
    </div>
  )
}