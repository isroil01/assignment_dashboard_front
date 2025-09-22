import { callAxios, HttpMethod } from "@/libs/axios-fetch";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useSighUp = () => {
  const router = useRouter();

  const {
    mutate: signUp,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: (data: { username: string; email: string; password: string }) =>
      callAxios({
        url: "/auth/signup",
        method: HttpMethod.POST,
        data,
      }),
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  return { signUp, isPending, isError, error };
};
