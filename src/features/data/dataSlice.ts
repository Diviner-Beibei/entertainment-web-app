import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    initData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { initData } = dataSlice.actions;

export default dataSlice.reducer;
