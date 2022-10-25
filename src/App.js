import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import RightBar from "./components/rightBar/rightBar";
import LeftBar from "./components/leftBar/leftBar";
import NavBar from "./components/navBar/navigation";
import HomePages from "./pages/home/homepages";
import Profile from "./pages/profile/profile";

function App() {
  const currentuser = true;
  const Layout = () => {
    return (
      <div className="layout">
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <Outlet></Outlet>
          <RightBar></RightBar>
        </div>
      </div>
    );
  };
  const ProtectRoute = ({ children }) => {
    if (!currentuser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRoute>
          <Layout />,
        </ProtectRoute>
      ),
      children: [
        {
          path: "/",
          element: <HomePages />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
