import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { useAppSelector } from "./reduxHooks";

export default function useAxiosInstance(language?: "en" | "ar") {
  const {
    auth: { token },
  } = useAppSelector((state) => state);

  const instance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_baseUrl,
    transformRequest: [
      (data, headers) => {
        if (token) {
          headers!.Authorization = token.value;
        }
        return data;
      },
    ],
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.data.data) response.data = response.data.data;
      return response;
    },
    (errorResponse: AxiosError) => {
      return Promise.reject(errorResponse);
    }
  );

  return instance;
}
