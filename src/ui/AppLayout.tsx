import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../features/auth/authSlice";
// import Loader from "./Loader";

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
    <main className="bg-primarydark">
      {/* {isLoading && <Loader />} */}
      <Outlet />
    </main>
  );
}

export default AppLayout;
