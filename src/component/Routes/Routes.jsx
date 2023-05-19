import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import ErrorPage from "../layout/ErrorPage/ErrorPage";
import Login from "../pages/CreateUser/Login/Login";
import Register from "../pages/CreateUser/Register/Register";
import Blog from "../pages/Blog/Blog";
import SingleToyDetails from "../pages/Tab/SingleToyDetails/SingleToyDetails";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";

const router = createBrowserRouter([
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    },
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'category/:id',
          element:<PrivateRoutes><SingleToyDetails></SingleToyDetails></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/single-toy/${params.id}`)
        },
        {
            path:'/technology-blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);
export default router;