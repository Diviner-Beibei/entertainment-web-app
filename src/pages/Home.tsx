import { useSelector } from "react-redux";
import { getTrendingShow } from "../features/show/showSlice";
import Search from "../ui/Search";
import ShowList from "../features/show/ShowList";

function Home() {
  const trendingShows = useSelector(getTrendingShow);

  return (
    <div className="bg-dark-blue h-screen pt-16 flex flex-col gap-3">
      <Search />
      <ShowList category="Trending" trendingShows={trendingShows} />
    </div>
  );
}

export default Home;
