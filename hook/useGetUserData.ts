import { callAxios, HttpMethod } from "@/libs/axios-fetch";
import { useQuery } from "@tanstack/react-query";

interface UserData {
  id: string;
  username: string;
  email: string;
  createdAt: string;
}

export const useGetUserData = () => {
  const { data, isLoading, error, isError } = useQuery<UserData>({
    queryKey: ["user-data"],
    queryFn: () =>
      callAxios({
        url: "/auth/me",
        method: HttpMethod.GET,
      }),
  });

  return { data, isLoading, error, isError };
};
