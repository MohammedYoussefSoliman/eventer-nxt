/* eslint-disable no-param-reassign */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { store, RootState } from "@/state";

export function getCurrentState(): RootState {
  return store.getState();
}
store.subscribe(getCurrentState);

const {
  auth: { token },
} = getCurrentState();

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

export default instance;
