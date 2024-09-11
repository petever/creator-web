import {Image, UnstyledButton} from '@mantine/core'
import styles from './styles.module.css'

interface CardProps {
	span ?: number
}
export const Card = ({span = 3} : CardProps) => {

	return (
	  <div className={styles.cardWrapper} style={{
    }}>
      <UnstyledButton className={styles.buttonStyle}>
        <Image
          radius="xs"
          fit="contain"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
        />
      </UnstyledButton>
    </div>
	)
}
