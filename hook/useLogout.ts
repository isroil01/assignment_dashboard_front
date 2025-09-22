import { callAxios, HttpMethod } from "@/libs/axios-fetch";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();
  const {
    mutate: logout,
    isError,
    error,
    isPending,
  } = useMutation({
    mutationFn: () =>
      callAxios({
        url: "/auth/logout",
        method: HttpMethod.POST,
      }),
    onSuccess: () => {
      router.push("/auth/signin");
    },
  });

  return { logout, isError, error, isPending };
};
