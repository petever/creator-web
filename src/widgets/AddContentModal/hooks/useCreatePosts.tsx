import {AddContentPayloadData} from "@/widgets/AddContentModal/types";
import {updateFavoritePosting} from "@/features/FeedButtons/api/updateFavoritePosting";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createPosts} from "@/widgets/AddContentModal/api/createPosts";
import {MUTATION_KEY} from "@/shared/constants/mutaionKey";
import {QUERY_KEY} from "@/shared/constants/queryKey";
import { notifications } from '@mantine/notifications';

export const useCreatePosts = () => {
  const queryClient = useQueryClient()
  const { mutate: createPostMutation, data } = useMutation({
    mutationFn: (payload : AddContentPayloadData) => createPosts(payload),
    mutationKey : [MUTATION_KEY.CREATE_POSTING],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.FEEDS],
      })
      return notifications.show({
        message: '피드가 등록되었습니다.',
        position:'bottom-center'
      })
    },
  })

  return {
    createPostMutation
  }
}
