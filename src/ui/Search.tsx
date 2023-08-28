import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  function handleSearch(e: unknown) {
    console.log(e);
    setSearch("");
    // setSearch(e.target.value);
  }

  return (
    <div className="flex ml-5 py-2 gap-3 items-center">
      <img
        src="./icon-search.svg"
        alt="Search Mark"
        className="w-[18px] h-[18px]"
      />
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search for movies or TV series"
        className="bg-transparent border-none focus:outline-none caret-red-500 text-base font-light min-w-[257px]"
      />
    </div>
  );
}

export default Search;
