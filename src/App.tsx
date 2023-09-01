import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import ProtectedRoute from "./pages/ProtectedRoute";
// import { AuthProvider } from "./contexts/FakeAuthContext";

import AppLayout, { loader as AppLoader } from "./ui/AppLayout";

import Error from "./ui/Error";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Bookmarked from "./pages/Bookmarked";
import Login, { action as LoginAction } from "./pages/Login";

let basenameUrl = "/";
if (import.meta.env.PROD) basenameUrl = "/entertainment-web-app/";
console.log(import.meta.env, basenameUrl);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      loader: AppLoader,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "movies",
          element: <Movies />,
        },
        {
          path: "tv-series",
          element: <TvSeries />,
        },
        {
          path: "bookmarked",
          element: <Bookmarked />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      action: LoginAction,
      errorElement: <Error />,
    },
  ],
  {
    basename: basenameUrl,
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
