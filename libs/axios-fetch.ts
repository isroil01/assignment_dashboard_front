import axios from "axios";
import apiClient from "./axios";

// enums.ts
export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

//
interface RequestOptions<T> {
  url: string;
  method: HttpMethod;
  data?: T;
  headers?: Record<string, string>;
  unauthenticated?: boolean;
}

export const callAxios = async <T>({
  url,
  method,
  data,
  headers,
  unauthenticated = false,
}: RequestOptions<T>) => {
  try {
    const client = unauthenticated
      ? axios.create({
          baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3003",
          withCredentials: false,
        }) // Override withCredentials
      : apiClient;

    const response = await client({
      url,
      method,
      data,
      headers: {
        ...apiClient.defaults.headers.common,
        ...headers,
      },
    });

    return response.data;
    /* eslint-disable */
  } catch (error: any) {
    const message =
      error?.response?.data?.message || "An unexpected error occurred";

    const status = error?.response?.status || 500;
    throw new Error(message);
  }
};
