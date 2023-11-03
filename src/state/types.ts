import { SnackbarOrigin } from "@mui/material";

export type UserType = {
  roles: string[];
  firstName: string;
  lastName: string;
  id?: string;
  avatar?: string;
};

export type AuthState = {
  token: {
    value: string;
  } | null;
  user: UserType;
};

export type SnackbarType = {
  anchorOrigin?: SnackbarOrigin;
  autoHideDuration?: number;
  message: string | null;
  status?: "success" | "failure" | "info";
  type: "normal" | "filled";
};

export type UIActionsState = {
  snackbar: SnackbarType;
  aside: {
    collapsed: boolean;
  };
};
