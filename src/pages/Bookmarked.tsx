import { useSelector } from "react-redux";
import ShowList from "../features/show/ShowList";
import {
  getBookmarkedShowsByMovie,
  getBookmarkedShowsByTv,
} from "../features/show/showSlice";

function Bookmarked() {
  const bookmarkedMovies = useSelector(getBookmarkedShowsByMovie);
  const bookmarkedTvSeries = useSelector(getBookmarkedShowsByTv);

  return (
    <div className="bg-dark-blue h-screen flex flex-col gap-8">
      <ShowList
        category="Bookmarked Movies"
        shows={bookmarkedMovies}
        isVerticle={true}
      />
      <ShowList
        category="Bookmarked Tv Series"
        shows={bookmarkedTvSeries}
        isVerticle={true}
      />
    </div>
  );
}

export default Bookmarked;
