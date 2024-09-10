import {Grid, Title} from '@mantine/core'
import classes from './styles.module.css'
import {getRecommend} from "@/shared/RecommentList/api/getRecommend";
import { useRequest } from 'alova/client';
import {Loading} from "@/shared/RecommentList/ui/Loading";
import {Profile} from "@/features";
import {Avatars} from "@/widgets/types";
import {Recommend} from "@/shared/RecommentList/types";


interface RecommendListProps {
  span ?: number
}
export const RecommendList = ({span = 1} : RecommendListProps) => {

  const { loading, data } = useRequest(getRecommend());

  if(loading) {
    return <Loading/>
  }

  return (
    <Grid.Col span={span}>
      <div className={classes.wrapper}>
        <Title order={4} className={classes.title}>회원님을 위한 추천</Title>
        {data?.map((recommend : Recommend) => {
            return (
              <div className={classes.recommend}>
                <Profile
                  key={`recommend_${recommend.id}`}
                  profile={recommend}
                  isSubscribed
                />
              </div>
            )
          })
        }
      </div>
    </Grid.Col>
  )
}
