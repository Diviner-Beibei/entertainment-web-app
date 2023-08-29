import { useSelector } from "react-redux";
import { getTrendingShow, getRecommendShow } from "../features/show/showSlice";
// import Search from "../ui/Search";
import ShowList from "../features/show/ShowList";

function Home() {
  const trendingShows = useSelector(getTrendingShow);
  const recommendShow = useSelector(getRecommendShow);

  return (
    <div className="bg-dark-blue h-full pt-5 flex flex-col gap-5">
      <ShowList category="Trending" shows={trendingShows} isVerticle={false} />
      <ShowList
        category="Recommended for you"
        shows={recommendShow}
        isVerticle={true}
      />
    </div>
  );
}

export default Home;
