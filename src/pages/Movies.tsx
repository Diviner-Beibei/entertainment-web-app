import { useSelector } from "react-redux";
import ShowList from "../features/show/ShowList";
import { getMovies } from "../features/show/showSlice";

function Movies() {
  const movies = useSelector(getMovies);

  return (
    <div className="bg-dark-blue h-full">
      <ShowList category="Movies" shows={movies} isVerticle={true} />
    </div>
  );
}

export default Movies;
