import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import SignUp from "../components/Pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
]);
