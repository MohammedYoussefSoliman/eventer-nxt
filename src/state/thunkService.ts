import { AxiosRequestConfig } from "axios";
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import generateInstance from "@/services/thunkInstance";
import { showError, showSuccess } from "@/state/ui-actions/slice";
import { RootState } from "@/state";

type Args = {
  formData: FormData;
  onSuccess?: () => void;
  onEnd?: () => void;
  onFailure?: (message: string) => void;
  setLoading?: (value: boolean) => void;
  successMessage?: string;
};

type GetArgs = Omit<Args, "formData"> & {
  config?: AxiosRequestConfig;
};

interface Service {
  postService: AsyncThunk<any, Args, {}>;
  getService: AsyncThunk<any, GetArgs, {}>;
}

export default class ThunkService implements Service {
  constructor(endpoint: string) {
    this.postService = createAsyncThunk(
      endpoint,
      async (args: Args, { dispatch, getState, rejectWithValue }) => {
        const state = getState() as RootState;
        const axiosInstance = generateInstance(state, dispatch);
        const {
          formData,
          onSuccess,
          setLoading,
          successMessage,
          onFailure,
          onEnd,
        } = args;
        try {
          if (setLoading) setLoading(true);
          const response = await axiosInstance.post(endpoint, formData);
          if (onSuccess) onSuccess();
          if (successMessage) dispatch(showSuccess(successMessage));
          return response.data;
        } catch (err) {
          const error = err as any;
          const message = error?.response?.data?.errors[0]?.message;
          if (onFailure) {
            onFailure(message);
          } else {
            dispatch(showError(message));
          }
          return rejectWithValue(error?.response?.data?.errors);
        } finally {
          if (setLoading) setLoading(false);
          if (onEnd) onEnd();
        }
      }
    );
    this.getService = createAsyncThunk(
      endpoint,
      async (args: GetArgs, { dispatch, getState, rejectWithValue }) => {
        const state = getState() as RootState;
        const axiosInstance = generateInstance(state, dispatch);
        const {
          onSuccess,
          config,
          setLoading,
          successMessage,
          onFailure,
          onEnd,
        } = args;
        try {
          if (setLoading) setLoading(true);
          const response = await axiosInstance.get(endpoint, { ...config });
          if (onSuccess) onSuccess();
          if (successMessage) dispatch(showSuccess(successMessage));
          return response.data;
        } catch (err) {
          const error = err as any;
          const message = error?.response?.data?.errors[0]?.message;
          if (onFailure) {
            onFailure(message);
          } else {
            dispatch(showError(message));
          }
          return rejectWithValue(error?.response?.data?.errors);
        } finally {
          if (setLoading) setLoading(false);
          if (onEnd) onEnd();
        }
      }
    );
  }

  postService;

  getService;
}
