import Logo from "./Logo";
import User from "./User";

function Navbar() {
  return (
    <nav className="bg-semi-dark-blue h-[56px] fixed flex items-center px-5 justify-between w-full">
      <Logo />
      <ul className="flex gap-5">
        <li>
          <img src="./icon-nav-home.svg" alt="Home" />
        </li>
        <li>
          <img src="./icon-nav-movies.svg" alt="Movies" />
        </li>
        <li>
          <img src="./icon-nav-tv-series.svg" alt="Tv Series" />
        </li>
        <li>
          <img src="./icon-nav-bookmark.svg" alt="Book Mark" />
        </li>
      </ul>
      <User />
    </nav>
  );
}

export default Navbar;
