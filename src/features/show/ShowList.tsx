import ShowItem from "./ShowItem";
import { Show } from "./showSlice";

interface ShowListProps {
  category: string;
  trendingShows: Show[];
}

function ShowList({ category, trendingShows }: ShowListProps) {
  console.log("1111111111", trendingShows);
  return (
    <div className="h-[181px] pl-5">
      <h2 className="text-pure-white mb-3 tracking-[0.31px] font-light text-xl">
        {category}
      </h2>
      <ul className="flex w-full overflow-hidden gap-5">
        {trendingShows.map((show) => (
          <li key={`${show.id}`}>{<ShowItem key={show.id} id={show.id} />}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
