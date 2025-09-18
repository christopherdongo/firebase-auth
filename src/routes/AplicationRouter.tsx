import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import { Home } from '../pages/home/Home'
import { Layout } from '../components/layout/Layout'
import { Login } from '../pages/login/Login'
import { Forgot } from '../pages/login/Forgot'
import { Register } from '../pages/register/Register'
import { RegisterComplete } from '../pages/register/RegisterComplete'
import { AdminLayout } from '../components/layout/AdminLayout'


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "forgot", element: <Forgot /> },
        { 
          path: "register", 
          element: <Register />, 
        },
        { path: "register/complete", element: <RegisterComplete /> },
      ],
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children:[
        {
          path: 'dashboard', element: <Home />
        }
      ]
    }
  ])

export const AppRoutes = () => {

    return(
        <RouterProvider router={router} /> 
    )
}