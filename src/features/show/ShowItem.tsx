import { useSelector } from "react-redux";
import { Show, getShowById, updateBookmark } from "./showSlice";
import store from "../../store";

interface ShowItemProps {
  id: number;
  isTrending: boolean;
}

function ShowItem({ id, isTrending }: ShowItemProps) {
  const show: Show | undefined = useSelector((state) => getShowById(state, id));

  const md = window.matchMedia("(min-width: 768px)");
  const lg = window.matchMedia("(min-width: 1024px)");
  // console.log(md, lg);

  let bgImg;
  let bgStyle;
  let showInfoStyle;

  if (isTrending) {
    bgImg = show?.thumbnail.trending.small;
    if (lg.matches) {
      bgImg = show?.thumbnail.trending.large;
    }
    bgStyle = `group w-60 h-[140px] md:w-[470px] md:h-[230px] rounded-lg overflow-hidden relative mb-5 flex items-center justify-center`;
    showInfoStyle =
      "absolute left-0 bottom-3 flex justify-between w-full px-4 items-center";
  } else {
    bgImg = show?.thumbnail.regular.small;
    if (md.matches) {
      bgImg = show?.thumbnail.regular.medium;
    }
    if (lg.matches) {
      bgImg = show?.thumbnail.regular.large;
    }

    bgStyle = `group w-[164px] h-[110px] md:w-[220px] md:h-[140px] lg:w-[280px] lg:h-[174px] rounded-lg relative flex items-center justify-center`;
    showInfoStyle =
      "absolute left-0 bottom-[-45px]  flex justify-between w-full items-center";
  }

  function handleBookmark(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    const node = (e.target as Element).closest(".bookmark");
    if (node) {
      store.dispatch(updateBookmark(id));
    }
  }
  //
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className={bgStyle}>
      <div className="group-hover:flex hidden items-center gap-4 pl-2 bg-pure-white bg-opacity-25 w-[115px] h-12 rounded-3xl">
        <img src="./icon-play.svg" alt="Play" className="w-[30px] h-[30px]" />
        <span className="text-pure-white text-[18px]">Play</span>
      </div>
      <div
        className="group bg-dark-blue h-8 w-8 rounded-full hover:bg-pure-white flex items-center justify-center opacity-50 absolute right-2 top-2 bookmark"
        onClick={handleBookmark}
      >
        {show?.isBookmarked ? (
          <svg
            width="12"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:stroke-dark-blue"
          >
            <path
              d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
              fill="#FFF"
              strokeWidth="1.5"
            />
          </svg>
        ) : (
          <svg
            width="12"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:text-dark-blue"
          >
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              stroke="#FFF"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        )}
      </div>

      <div className={showInfoStyle}>
        <div>
          <div className="flex items-center gap-2">
            <span
              className={`text-pure-white opacity-75 ${
                isTrending ? "text-xs md:text-[15px]" : "text-xs md:text-[13px]"
              } font-light`}
            >
              {show?.year}
            </span>
            <span className="bg-pure-white w-[3px] h-[3px] opacity-50"></span>
            {show?.category === "Movie" ? (
              <img src="./icon-category-movie.svg" alt="category mark" />
            ) : (
              <img src="./icon-category-tv.svg" alt="category mark" />
            )}

            <span
              className={`text-pure-white opacity-75 ${
                isTrending ? "text-xs md:text-[15px]" : "text-xs md:text-[13px]"
              } font-light`}
            >
              {show?.category}
            </span>
          </div>
          <h1
            className={`${
              isTrending ? "text-[15px] md:text-2xl" : "text-sm md:text-[18px]"
            } font-medium text-pure-white`}
          >
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
