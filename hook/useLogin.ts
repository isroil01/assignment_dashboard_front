import { callAxios, HttpMethod } from "@/libs/axios-fetch";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const {
    mutate: login,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      callAxios({
        url: "/auth/signin",
        method: HttpMethod.POST,
        data,
      }),
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  return { login, isPending ,isError, error };
};
