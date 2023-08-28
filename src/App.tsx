import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import ProtectedRoute from "./pages/ProtectedRoute";
// import { AuthProvider } from "./contexts/FakeAuthContext";

import AppLayout, { loader as AppLoader } from "./ui/AppLayout";

import Error from "./ui/Error";
import Home from "./pages/Home";
import Login, { action as LoginAction } from "./pages/Login";

const router = createBrowserRouter([
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
    ],
  },
  {
    path: "/login",
    element: <Login />,
    action: LoginAction,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
