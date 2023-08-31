import { useSelector } from "react-redux";
import { getTrendingShow, getRecommendShow } from "../features/show/showSlice";
// import Search from "../ui/Search";
import ShowList from "../features/show/ShowList";

function Home() {
  const trendingShows = useSelector(getTrendingShow);
  const recommendShow = useSelector(getRecommendShow);

  return (
    <div className="bg-dark-blue h-full flex flex-col gap-5">
      <ShowList category="Trending" shows={trendingShows} isVerticle={false} />
      <div>
        <ShowList
          category="Recommended for you"
          shows={recommendShow}
          isVerticle={true}
        />
      </div>
    </div>
  );
}

export default Home;
