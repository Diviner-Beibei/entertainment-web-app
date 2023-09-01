import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// const FAKE_USER = {
//   name: "Jack",
//   email: "jack@example.com",
//   password: "qwerty",
//   avatar: "https://i.pravatar.cc/100?u=zz",
// };

interface State {
  user: {
    name: string;
    email: string;
    password: string;
    avatar: string;
  };
  isAuthenticated: boolean;
  errorNumber: number;
  // isLogin: boolean;
}

const initialState: State = {
  user: {
    name: "Jack",
    email: "",
    password: "",
    avatar: "https://i.pravatar.cc/100?u=zz",
  },
  isAuthenticated: false,
  errorNumber: 0,
  // isLogin: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state: State, action) {
      // console.log(state, action.payload);
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
      state.isAuthenticated = true;
      state.errorNumber = 0;
    },
    logout(state) {
      state.user.email = "";
      state.user.password = "";
      state.isAuthenticated = false;
    },
    setErrorNumber(state, action) {
      state.errorNumber = action.payload;
    },
    // setIsLogin(state, action) {
    //   state.isLogin = action.payload;
    // },
  },
});

export const { login, logout, setErrorNumber } = authSlice.actions;

export default authSlice.reducer;

export const getIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const getUserFace = (state: RootState) => state.auth.user.avatar;
export const getErrorNumber = (state: RootState) => state.auth.errorNumber;
// export const getIsLogin = (state: RootState) => state.auth.isLogin;
