'use client'
import classes from './styles.module.css'
import {Contents} from "@/pages/home/Contents";
import {RecommendList} from "@/shared/RecommentList/ui/RecommendList";

const HomePage = () => {
  return (
    <div className={classes.wrapper}>
      <Contents/>
      <RecommendList span={3}/>
    </div>
  )
}

export default HomePage
