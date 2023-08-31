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
  serch: string;
  isSearching: boolean;
}

const initialState: State = { shows: [], serch: "", isSearching: false };

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
    updateSearch(state, action) {
      state.serch = action.payload;
      if (action.payload) state.isSearching = true;
      else state.isSearching = false;
    },
  },
});

export const { initData, updateBookmark, updateSearch } = dataSlice.actions;

export default dataSlice.reducer;

// export const getTrendingShow = (state: RootState) =>
//   state.shows.shows.filter((e) => e.isTrending);

//Get interface
export const getShows = (state: RootState) => state.show.shows;

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

export const getBookmarkedShowsByMovie = createSelector([getShows], (shows) =>
  shows.filter((e) => e.isBookmarked && e.category === "Movie")
);

export const getBookmarkedShowsByTv = createSelector([getShows], (shows) =>
  shows.filter((e) => e.isBookmarked && e.category === "TV Series")
);

export const getShowById = createSelector(
  [getShows, (_, id) => id],
  (shows, id) => shows.find((e: Show) => e.id === id)
);

export const getShowsBySearch = createSelector(
  [getShows, (state: RootState) => state.show.serch],
  (shows, search) =>
    shows.filter((show) =>
      show.title.toLowerCase().includes(search.toLowerCase())
    )
);

export const getSearchString = (state: RootState) => state.show.serch;
export const getIsSearching = (state: RootState) => state.show.isSearching;
