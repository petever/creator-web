import {Card} from "@/features/Card/ui";
import styles from './styles.module.css'

export const CardList = () => {
	return (
    <div className={styles.wrapper}>
			<Card/>
			<Card/>
			<Card span={12}/>
			<Card span={12}/>
			<Card/>
			<Card/>
    </div>
	)
}
