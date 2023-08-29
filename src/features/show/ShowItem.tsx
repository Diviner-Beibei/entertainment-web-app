import { useSelector } from "react-redux";
import { Show, getShowById } from "./showSlice";

interface ShowItemProps {
  id: number;
  isTrending: boolean;
}

function ShowItem({ id, isTrending }: ShowItemProps) {
  const show: Show | undefined = useSelector((state) => getShowById(state, id));

  let bgImg;
  let bgStyle;
  let showInfoStyle;
  if (isTrending) {
    bgImg = show?.thumbnail.trending.small;
    bgStyle = `w-60 h-[140px] rounded-lg overflow-hidden relative mb-5`;
    showInfoStyle =
      "absolute left-0 bottom-3 flex justify-between w-full px-4 items-center";
  } else {
    bgImg = show?.thumbnail.regular.small;
    bgStyle = `w-[164px] h-[110px] rounded-lg relative`;
    showInfoStyle =
      "absolute left-0 bottom-[-45px] flex justify-between w-full items-center";
  }

  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className={bgStyle}>
      <div className="bg-dark-blue h-8 w-8 rounded-full flex items-center justify-center opacity-50 absolute right-2 top-2">
        <img src="./icon-bookmark-empty.svg" alt="picture" />
      </div>

      <div className={showInfoStyle}>
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
        {isTrending && (
          <div className="bg-pure-white w-[34px] h-[21px] rounded-2xl text-pure-white bg-opacity-[0.15] flex items-center justify-center text-[13px] font-light">
            {show?.rating}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowItem;
