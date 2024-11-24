import useFavoritePostWithMembers from "@/entities/posts/hooks/useFavoritePostWithMembers";
import {useComment} from "@/features/Comment/hooks/useComment";
import {CommentTypes} from "@/features/Comment/type";
import React, {useEffect, useMemo} from "react";
import {PostLikeContent} from "@/entities/posts/types";
import {Avatar, AvatarImage} from "@/shared/ui/avatar";
import Link from "next/link";
import {useInView} from "react-intersection-observer";

interface PostLikeListProps {
  id: string
}
export const PostLikeList = ({ id }: PostLikeListProps) => {
	const { ref, inView } = useInView()

	const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useFavoritePostWithMembers(id)

	const likeMembers: PostLikeContent[] = useMemo(
		() => (data ? data.pages.flatMap(({ content }) => content) : []),
		[data],
	)
	const fetchMore = () => {
		if (!inView) {
			return
		}
		void fetchNextPage()
	}

	useEffect(() => {
		fetchMore()
	}, [inView, hasNextPage])

  return <>
		{likeMembers.map((member) => {
				return (
					<Link href={member.user.username}>
						<div className='flex gap-2 items-center'>
							<Avatar>
								<AvatarImage src={member.user.picture as string}/>
							</Avatar>
							{member.user.displayName}
						</div>
					</Link>
				)
			}
		)}
		<div ref={ref}></div>
	</>
}
