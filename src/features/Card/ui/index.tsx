import { Box, Grid, Image, UnstyledButton } from '@mantine/core'
import classes from './styles.module.css'

export const Card = () => {
  return (
    <UnstyledButton className={classes.imageWrapper}>
      <Image
        radius="xs"
        height={300}
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
      />
    </UnstyledButton>
  )
}
