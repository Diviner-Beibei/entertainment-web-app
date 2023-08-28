import { useSelector } from "react-redux";
import { Show, getShowById } from "./showSlice";

interface ShowItemProps {
  id: number;
}

function ShowItem({ id }: ShowItemProps) {
  const show: Show | undefined = useSelector((state) => getShowById(state, id));
  return (
    <div
      style={{ backgroundImage: `url(${show?.thumbnail.trending.small})` }}
      className={`w-60 h-[140px] rounded-lg overflow-hidden relative`}
    >
      <div className="bg-dark-blue h-8 w-8 rounded-full flex items-center justify-center opacity-50 absolute right-2 top-2">
        <img src="./icon-bookmark-empty.svg" alt="picture" />
      </div>

      <div className="absolute left-0 bottom-3 flex justify-between w-full px-4 items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-pure-white opacity-75 text-[12px] font-light">
              {show?.year}
            </span>
            <span className="bg-pure-white w-[3px] h-[3px] opacity-50"></span>
            <img src="./icon-category-movie.svg" alt="category mark" />
            <span className="text-pure-white opacity-75 text-[12px] font-light">
              {show?.category}
            </span>
          </div>
          <h1 className="text-[15px] font-medium text-pure-white">
            {show?.title}
          </h1>
        </div>
        <div className="bg-pure-white w-[34px] h-[21px] rounded-2xl text-pure-white bg-opacity-[0.15] flex items-center justify-center text-[13px] font-light">
          {show?.rating}
        </div>
      </div>
    </div>
  );
}

export default ShowItem;
