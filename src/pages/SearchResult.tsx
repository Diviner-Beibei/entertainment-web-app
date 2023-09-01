import { useSelector } from "react-redux";
import ShowList from "../features/show/ShowList";
import { getSearchString, getShowsBySearch } from "../features/show/showSlice";

function SearchResult() {
  const results = useSelector(getShowsBySearch);
  const inputString = useSelector(getSearchString);
  const category = `Found ${results.length} results for "${inputString}"`;
  //min-h-[600px]
  return (
    <div className="bg-dark-blue h-screen">
      <ShowList category={category} shows={results} isVerticle={true} />
    </div>
  );
}

export default SearchResult;
