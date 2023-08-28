import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface Show {
  id: number;
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface State {
  shows: Show[];
}

const initialState: State = { shows: [] };

const dataSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    initData(state, action) {
      state.shows = action.payload;
    },
  },
});

export const { initData } = dataSlice.actions;

export default dataSlice.reducer;

// export const getTrendingShow = (state: RootState) =>
//   state.shows.shows.filter((e) => e.isTrending);

export const getShows = (state: RootState) => state.shows.shows;

export const getTrendingShow = createSelector([getShows], (shows) =>
  shows.filter((e) => e.isTrending)
);

export const getShowById = createSelector(
  [getShows, (_, id) => id],
  (shows, id) => shows.find((e: Show) => e.id === id)
);
