import { rem, Text } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';
import { Dropzone } from '@mantine/dropzone';
import classes from "@/entities/ImageUpload/ui/DropzoneIdle/styles.module.css";

interface DropzoneIdleProps {
	isPhoto ?: boolean
	text ?: string
}
export const DropzoneIdle = ({isPhoto, text} : DropzoneIdleProps) => {
	if(!text) return null

	return (
		<div className={classes.textWrapper}>
			<Dropzone.Idle>
				{isPhoto &&
            <IconPhoto
                style={{width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)'}}
                stroke={1.5}
            />
				}
			</Dropzone.Idle>
			{text &&
          <Text size="sm" inline>
						{text}
          </Text>
			}
		</div>
	)
}