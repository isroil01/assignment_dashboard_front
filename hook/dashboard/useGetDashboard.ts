import { callAxios, HttpMethod } from "@/libs/axios-fetch";
import { useQuery } from "@tanstack/react-query";

interface DashboardData {
  totalCountry: number;
  totalCompany: number;
  highestEmit: string;
  topEmit: string;
}

export const useGetDashboard = () => {
  const { data, isLoading, isError, error } = useQuery<DashboardData>({
    queryKey: ["dashboard-data"],
    queryFn: () =>
      callAxios({
        url: "/dashboard/overview",
        method: HttpMethod.GET,
      }),
  });

  return { data, isLoading, isError, error };
};
