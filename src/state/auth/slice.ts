import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import loginService from "./loginService";
import logoutService from "./logoutService";
import profileService from "./profileService";
import { AuthState } from "../types";

const { getService: getUserProfile, postService: updateUserProfile } =
  profileService;

const initialState: AuthState = {
  token: null,
  user: {
    roles: ["speaker"],
    firstName: "",
    lastName: "",
  },
};

const authInit = (state: AuthState, action: PayloadAction<any>) => {
  const { accessToken } = action.payload.records;
  return {
    ...state,
    token: {
      value: `${accessToken.type} ${accessToken.token}`,
    },
  };
};

const doLogout = (state: AuthState) => ({
  token: null,
  rememberMe: false,
  user: {
    roles: [],
    firstName: "",
    lastName: "",
  },
});

const updateUserState = (state: AuthState, action: PayloadAction<any>) => {
  const { firstName, lastName, avatar, id, roles } = action.payload;
  return {
    ...state,
    user: {
      roles,
      avatar,
      firstName,
      lastName,
      id,
    },
  };
};

const slice = createSlice({
  name: "app/authentication",
  initialState,
  reducers: {
    logout: doLogout,
    setRememberMe(state, action: PayloadAction<boolean>) {
      return { ...state, rememberMe: action.payload };
    },
  },
  extraReducers: {
    [getUserProfile.fulfilled.type]: updateUserState,
    [getUserProfile.rejected.type]: (state: AuthState) => state,
    [updateUserProfile.fulfilled.type]: updateUserState,
    [updateUserProfile.rejected.type]: (state: AuthState) => state,
    [loginService.fulfilled.type]: authInit,
    [loginService.rejected.type]: () => initialState,
    [logoutService.fulfilled.type]: doLogout,
    [logoutService.rejected.type]: doLogout,
  },
});

export const { setRememberMe, logout } = slice.actions;
export default slice.reducer;
