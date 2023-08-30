import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import User from "./User";

function Navbar() {
  const navigate = useNavigate();

  function handleClick(e: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    e.preventDefault();
    const node = (e.target as Element).closest(".category");

    console.log(node);
    // const node = e.target.closest("category");
    if (node) {
      if (node.classList.contains("home")) {
        navigate("/");
      }
      if (node.classList.contains("movies")) {
        navigate("/movies");
      }
      if (node.classList.contains("tv-series")) {
        navigate("/tv-series");
      }
      if (node.classList.contains("bookmarked")) {
        navigate("/bookmarked");
      }
    }
  }

  return (
    <nav className="bg-semi-dark-blue h-[56px] fixed flex items-center px-5 justify-between w-full z-10">
      <Logo />
      <ul className="flex gap-5" onClick={handleClick}>
        <li className="home category">
          <img src="./icon-nav-home.svg" alt="Home" />
        </li>
        <li className="movies category">
          <img src="./icon-nav-movies.svg" alt="Movies" />
        </li>
        <li className="tv-series category">
          <img src="./icon-nav-tv-series.svg" alt="Tv Series" />
        </li>
        <li className="bookmarked category">
          <img src="./icon-nav-bookmark.svg" alt="Book Mark" />
        </li>
      </ul>
      <User />
    </nav>
  );
}

export default Navbar;
