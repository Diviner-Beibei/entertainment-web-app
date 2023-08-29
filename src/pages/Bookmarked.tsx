import { useSelector } from "react-redux";
import ShowList from "../features/show/ShowList";
import { getBookmarkedShows } from "../features/show/showSlice";

function Bookmarked() {
  const bookmarkedShows = useSelector(getBookmarkedShows);

  return (
    <div className="bg-dark-blue h-full">
      <ShowList
        category="Bookmarked Movies"
        shows={bookmarkedShows}
        isVerticle={true}
      />
    </div>
  );
}

export default Bookmarked;
