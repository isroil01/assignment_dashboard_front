import { callAxios, HttpMethod } from "@/libs/axios-fetch";
import { useQuery } from "@tanstack/react-query";

export type Report = {
  id: string;
  title: string;
  resourceUid: string;
  dateTime: string;
  content: string;
};

export const useGetReports = () => {
  const { data, isLoading, isError, error } = useQuery<Report[]>({
    queryKey: ["reports"],
    queryFn: () =>
      callAxios({
        url: "/reports",
        method: HttpMethod.GET,
      }),
    initialData: [],
  });

  return { data, isLoading, isError, error };
};
