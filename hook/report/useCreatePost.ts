import { callAxios, HttpMethod } from "@/libs/axios-fetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreatePost = () => {
  const client = useQueryClient();
  const {
    mutate: createPost,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: (data: {
      title: string;
      resourceUid: string;
      dateTime: string;
      content: string;
    }) =>
      callAxios({
        url: "/reports",
        method: HttpMethod.POST,
        data,
      }),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["reports"] });
    },
  });

  return { createPost, isPending, isError, error };
};
