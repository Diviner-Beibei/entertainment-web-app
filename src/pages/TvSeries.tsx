import { useSelector } from "react-redux";
import ShowList from "../features/show/ShowList";
import { getTvSeries } from "../features/show/showSlice";

function TvSeries() {
  const tvSeries = useSelector(getTvSeries);
  return (
    <div className="bg-dark-blue h-full">
      <ShowList category="Movies" shows={tvSeries} isVerticle={true} />
    </div>
  );
}

export default TvSeries;
