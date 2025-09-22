import { Company } from "../../types/company";
import { callAxios, HttpMethod } from "@/libs/axios-fetch";
import { useQuery } from "@tanstack/react-query";

export const useGetDashboardCompany = () => {
  const { data, isLoading, isError, error } = useQuery<Company[]>({
    queryKey: ["dashboard-company"],
    queryFn: () =>
      callAxios({
        url: "/dashboard/companies",
        method: HttpMethod.GET,
      }),
    initialData: [],
  });

  return { data, isLoading, isError, error };
};
