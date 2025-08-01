import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import { Home } from '../pages/home/Home'
import { Layout } from '../components/layout/Layout'
import { Login } from '../pages/login/Login'
import { Forgot } from '../pages/login/Forgot'
import { Register } from '../pages/register/Register'


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "forgot", element: <Forgot /> },
        { path: "register", element: <Register /> },
      ],
    },
  ])

export const AppRoutes = () => {

    return(
        <RouterProvider router={router} /> 
    )
}