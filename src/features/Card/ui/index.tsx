import {Box, Button, Grid, Image, UnstyledButton} from '@mantine/core'


interface CardProps {
	span ?: number
}
export const Card = ({span = 6} : CardProps) => {

	return (
		<Grid.Col span={span} style={{
			padding:0
		}}>
			<Box>
				<UnstyledButton
					style={{
						height: '400px'
					}}
				>
					<Image
						radius="xs"
						fit="contain"
						src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
					/>
				</UnstyledButton>
			</Box>
		</Grid.Col>
	)
}