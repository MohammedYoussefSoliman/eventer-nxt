/* eslint-disable no-param-reassign */
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/state";

function generateInstance(
  state: RootState,
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>
): AxiosInstance {
  const {
    auth: { token },
  } = state;

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

export default generateInstance;
