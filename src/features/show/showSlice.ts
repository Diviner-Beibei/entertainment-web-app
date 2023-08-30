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
    updateBookmark(state, action) {
      state.shows.filter((show) => {
        if (show.id === action.payload) show.isBookmarked = !show.isBookmarked;
      });
    },
  },
});

export const { initData, updateBookmark } = dataSlice.actions;

export default dataSlice.reducer;

// export const getTrendingShow = (state: RootState) =>
//   state.shows.shows.filter((e) => e.isTrending);

//Get interface
export const getShows = (state: RootState) => state.shows.shows;

export const getTrendingShow = createSelector([getShows], (shows) =>
  shows.filter((e) => e.isTrending)
);

export const getRecommendShow = createSelector([getShows], (shows) =>
  shows.filter((e) => !e.isTrending)
);

export const getMovies = createSelector([getShows], (shows) =>
  shows.filter((e) => e.category === "Movie")
);

export const getTvSeries = createSelector([getShows], (shows) =>
  shows.filter((e) => e.category === "TV Series")
);

export const getBookmarkedShows = createSelector([getShows], (shows) =>
  shows.filter((e) => e.isBookmarked)
);

export const getShowById = createSelector(
  [getShows, (_, id) => id],
  (shows, id) => shows.find((e: Show) => e.id === id)
);
