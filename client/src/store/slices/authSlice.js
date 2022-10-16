import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: "checking",
  user: undefined,
  errorMessage: undefined,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = undefined;
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "auth";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-auth";
      state.user = undefined;
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});
export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions;
