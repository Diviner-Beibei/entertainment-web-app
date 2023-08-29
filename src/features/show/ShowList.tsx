import ShowItem from "./ShowItem";
import { Show } from "./showSlice";

interface ShowListProps {
  category: string;
  shows: Show[];
  isVerticle: boolean;
}

function ShowList({ category, shows, isVerticle }: ShowListProps) {
  // console.log("1111111111", trendingShows);
  return (
    <div className="ml-5">
      <h2 className="text-pure-white mb-4 tracking-[0.31px] font-light text-xl">
        {category}
      </h2>
      {!isVerticle && (
        <ul className="flex w-full overflow-hidden gap-5 overflow-x-auto ">
          {shows.map((show) => (
            <li key={`${show.id}`}>
              {<ShowItem key={show.id} id={show.id} isTrending={true} />}
            </li>
          ))}
        </ul>
      )}
      {isVerticle && (
        <ul className="flex flex-wrap w-full overflow-hidden gap-4 overflow-y-auto ">
          {shows.map((show) => (
            <li className="h-[150px]" key={`${show.id}`}>
              {<ShowItem key={show.id} id={show.id} isTrending={false} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShowList;