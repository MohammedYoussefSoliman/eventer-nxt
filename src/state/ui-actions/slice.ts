import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";
import { UIActionsState, SnackbarType } from "../types";

export type AuthMode = "modal" | "page";

const initialState: UIActionsState = {
  snackbar: {
    message: null,
    autoHideDuration: 8000,
    anchorOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    status: "info",
    type: "normal",
  },
  aside: {
    collapsed: false,
  },
};

const messageReducer = (
  state: UIActionsState,
  action: PayloadAction<SnackbarType>
) => {
  return {
    ...state,
    snackbar: {
      ...state.snackbar,
      ...action.payload,
    },
  };
};

const slice = createSlice({
  name: "app/ui-actions",
  initialState,
  reducers: {
    showMessage: {
      reducer: messageReducer,
      prepare: (message: string, options?: Omit<SnackbarType, "message">) => {
        let payload = { ...initialState.snackbar };
        if (!_.isEmpty(options)) {
          payload = { ...payload, ...options };
        }
        payload = { ...payload, message };
        return { payload };
      },
    },
    showError: {
      reducer: messageReducer,
      prepare: (message: string, type?: UIActionsState["snackbar"]["type"]) => {
        return {
          payload: {
            ...initialState.snackbar,
            message,
            status: "failure" as "success" | "failure" | "info",
            type: type || "normal",
            autoHideDuration: type === "normal" ? 5000 : undefined,
          },
        };
      },
    },
    showSuccess: {
      reducer: messageReducer,
      prepare: (message: string, type?: UIActionsState["snackbar"]["type"]) => {
        return {
          payload: {
            ...initialState.snackbar,
            message,
            status: "success" as "success" | "failure" | "info",
            type: type || "normal",
            autoHideDuration: type === "normal" ? 5000 : undefined,
          },
        };
      },
    },
    dismissMessage(state) {
      return { ...state, snackbar: initialState.snackbar };
    },
    toggleAside(state: UIActionsState, action: PayloadAction<boolean>) {
      return {
        ...state,
        aside: {
          collapsed: action.payload,
        },
      };
    },
  },
});

export const {
  showMessage,
  showError,
  showSuccess,
  dismissMessage,
  toggleAside,
} = slice.actions;
export default slice.reducer;
