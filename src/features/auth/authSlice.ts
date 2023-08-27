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
}

const initialState: State = {
  user: {
    name: "Jack",
    email: "",
    password: "",
    avatar: "https://i.pravatar.cc/100?u=zz",
  },
  isAuthenticated: false,
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
    },
    logout(state) {
      state.user.email = "";
      state.user.password = "";
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const getIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
