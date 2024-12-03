import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EditProfile from "./pages/EditProfile";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/edit/:id",
        element: <EditProfile />
      },
      {
        path: "/detail/:id",
        element: <Details />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App