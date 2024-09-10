import {Card} from "@/features/Card/ui";
import {Grid} from "@mantine/core";

export const CardList = () => {
	return (
		<Grid
			align='flex-start'
		>
			<Card/>
			<Card/>
			<Card span={12}/>
			<Card span={12}/>
			<Card/>
			<Card/>
		</Grid>
	)
}