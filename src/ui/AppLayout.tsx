import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../features/auth/authSlice";
import Navbar from "./Navbar";
// import Loader from "./Loader";
import { getIsSearching, initData } from "../features/show/showSlice";
import store from "../store";
import Search from "./Search";
import SearchResult from "../pages/SearchResult";

function AppLayout() {
  const isAuth = useSelector(getIsAuthenticated);

  const isSearching = useSelector(getIsSearching);
  // console.log(isAuth);

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuth) navigate("/login");
    },
    [isAuth, navigate]
  );
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="bg-dark-blue h-full">
      <header className="mb-5 md:pt-5">
        <div className="w-full md:mx-auto md:flex md:justify-center">
          <Navbar />
        </div>

        <div className="pt-16 md:pt-24 lg:ml-28 lg:pt-5">
          <Search />
        </div>
      </header>
      <main className="lg:ml-28">
        {isSearching && <SearchResult />}
        {!isSearching && <Outlet />}
      </main>
      {/* {isLoading && <Loader />} */}
    </main>
  );
}

export async function loader() {
  const res = await fetch("./data.json");
  const data = await res.json();
  // console.log(data);
  store.dispatch(initData(data));

  return data;
}

export default AppLayout;
