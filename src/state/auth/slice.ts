import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types";

const initialState: AuthState = {
  token: {
    value:
      "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpZCI6MzAzLCJ0eXBlIjoidXNlciIsInJhbiI6IkJORU5WSVBOTlFUWVBMS0tVQ0JWIiwic3RhdHVzIjoxfQ.YGV-jGKZj1Lp4SqlM3aiF6Aov6YVF6lZRMpKvx_Zdrpjj4C1zE-JSTKtjVboQ9de58TUViyVOc4JwiktjF_4yxnYzIrw449s584j2GiqUpxfp6OPmfAj8BAbfN_M4RoU5PXEjhcNVh5uNRtxtvxZtpECrl72_22T4he3LbqISMNHzVh5eprIKIFLt_pM7cyRKt3Njf8I89CLnq5nUpiDHnMMForamKq9jubmiYPOHpFvijEE3-jusRk0F1T32zMY_0AELXnpqhbbx6HtmMdxBahnrUNyznacdVwaSrNus8vX01N8zEcfRvkRzYuqjnZXr9jrm2iriHq80iicUG99GQ",
  },
  user: {
    roles: ["speaker"],
    firstName: "",
    lastName: "",
  },
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

const slice = createSlice({
  name: "app/authentication",
  initialState,
  reducers: {
    logout: doLogout,
    setRememberMe(state, action: PayloadAction<boolean>) {
      return { ...state, rememberMe: action.payload };
    },
  },
});

export const { setRememberMe, logout } = slice.actions;
export default slice.reducer;
