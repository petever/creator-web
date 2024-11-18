import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classes from '@/shared/RecommentList/ui/styles.module.css'
interface LoadingProps {
  span?: number
}
export const Loading = ({ span }: LoadingProps) => {
  return (
    <div>
      <div>
        <h3>회원님을 위한 추천</h3>
        <Skeleton />
      </div>
    </div>
  )
}
