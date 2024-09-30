import Image from "next/image";
import { UnstyledButton } from '@mantine/core';
import {FileWithPath} from "@mantine/dropzone";
import classes from "@/features/PreviewList/ui/styles.module.css";
import { IconCircleCheckFilled } from '@tabler/icons-react';

interface PreviewProps {
	currentIndex : number
	previews : FileWithPath[]
	onShowImageChange : (url : string, index : number) => void
}

export const Preview = ({ currentIndex, previews, onShowImageChange} : PreviewProps) => {
	if(previews.length < 1) return null

	return (
		<ul className={classes.previewListWrapper}>
			{
				previews.map((file, index) => {
					const imageUrl = URL.createObjectURL(file);
					return (
						<li className={classes.previewWrapper}>
							<UnstyledButton onClick={() => onShowImageChange(imageUrl, index)}>
								{currentIndex === index &&
									<i className={classes.currentIconWrapper}>
										{<IconCircleCheckFilled color={'blue'}/>}
									</i>
								}
								<Image key={index} src={imageUrl} alt='' fill/>
							</UnstyledButton>
						</li>
					)
				})
			}
		</ul>
	)
}