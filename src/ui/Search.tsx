import { useState } from "react";
import store from "../store";
import { updateSearch } from "../features/show/showSlice";

function Search() {
  const [search, setSearch] = useState("");
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    console.log(val);
    setSearch(val);
    if (/\w/.test(val)) {
      store.dispatch(updateSearch(val));
      return;
    } else {
      store.dispatch(updateSearch(""));
    }
  }

  return (
    <div className="flex ml-5 py-2 gap-3 items-center">
      <img
        src="./icon-search.svg"
        alt="Search Mark"
        className="w-[18px] h-[18px] md:w-6 md:h-6"
      />
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search for movies or TV series"
        className="bg-transparent text-pure-white border-none focus:outline-none caret-red-500 text-base md:text-2xl font-light min-w-[257px] md:min-w-[321px]"
      />
    </div>
  );
}

export default Search;
