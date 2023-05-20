import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import ErrorPage from "../layout/ErrorPage/ErrorPage";
import Login from "../pages/CreateUser/Login/Login";
import Register from "../pages/CreateUser/Register/Register";
import Blog from "../pages/Blog/Blog";
import SingleToyDetails from "../pages/Tab/SingleToyDetails/SingleToyDetails";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";
import AddedToy from "../../PrivateToy/AddedToy/AddedToy";
import MyToys from "../../PrivateToy/MyToys/MyToys";
import AllToys from "../pages/allToys/AllToys";
import UpdateMyToys from "../../PrivateToy/MyToys/MyToysRow/UpdateMyToys";
import AllToyDetails from "../pages/allToys/AllToyDetails/AllToyDetails";

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
          loader:({params})=>fetch(`https://toy-shop-phi.vercel.app/single-toy/${params.id}`)
        },
        {
            path:'/technology-blog',
            element:<Blog></Blog>
        },
        {
          path:'/add-a-toy',
          element:<PrivateRoutes><AddedToy></AddedToy></PrivateRoutes>
        },
        {
          path:'/all-toys',
          element:<AllToys></AllToys>,
        },
        {
          path:'/my-toys',
          element:<PrivateRoutes><MyToys></MyToys></PrivateRoutes>,

        },
        {
          path:'/all-toys-details/:id',
          element:<AllToyDetails></AllToyDetails>,
          loader:({params})=>fetch(`https://toy-shop-phi.vercel.app/order-collection/${params.id}`)

        },
        {
          path:'/update-my-toys/:id',
          element:<PrivateRoutes><UpdateMyToys></UpdateMyToys></PrivateRoutes>,
          loader:({params})=>fetch(`https://toy-shop-phi.vercel.app/update-toy-collection/${params.id}`)
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