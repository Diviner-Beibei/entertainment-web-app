import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../features/auth/authSlice";
import Navbar from "./Navbar";
// import Loader from "./Loader";
import { initData } from "../features/show/showSlice";
import store from "../store";
import Search from "./Search";

function AppLayout() {
  const isAuth = useSelector(getIsAuthenticated);
  console.log(isAuth);

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
      <header className="">
        <Navbar />
        <div className="pt-16">
          <Search />
        </div>
      </header>
      {/* {isLoading && <Loader />} */}
      <Outlet />
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
