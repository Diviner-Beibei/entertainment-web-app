import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import showSlice from "./features/show/showSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    show: showSlice,
  },
});

export default store;

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
