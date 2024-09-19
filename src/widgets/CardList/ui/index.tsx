import { Card } from '@/features/Card/ui'
import classes from './styles.module.css'

export const CardList = () => {
  return (
    <div className={classes.wrapper}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
