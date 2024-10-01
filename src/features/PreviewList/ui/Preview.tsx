import Image from "next/image";
import {Button, UnstyledButton} from '@mantine/core';
import classes from "@/features/PreviewList/ui/styles.module.css";
import { IconSquareXFilled } from '@tabler/icons-react';

interface PreviewProps {
	currentIndex : number
	previews : File[]
  onRemoveImage : (index : number) => void
	onShowImageChange : (url : string, index : number) => void
}

export const Preview = ({ currentIndex, previews, onRemoveImage, onShowImageChange} : PreviewProps) => {
	if(previews.length < 1) return null

	return (
		<ul className={classes.previewListWrapper}>
			{
				previews.map((file, index) => {
					const imageUrl = URL.createObjectURL(file);
					return (
						<li className={classes.previewWrapper} key={`preview_${index}`}>
							<UnstyledButton onClick={() => onShowImageChange(imageUrl, index)}>
								{currentIndex === index &&
									<div className={classes.currentImageWrapper}/>
								}
								<Image src={imageUrl} alt='' fill/>
							</UnstyledButton>
              <UnstyledButton className={classes.deleteButton} onClick={() => onRemoveImage(index)}>
                <IconSquareXFilled/>
              </UnstyledButton>
						</li>
					)
				})
			}
		</ul>
	)
}
