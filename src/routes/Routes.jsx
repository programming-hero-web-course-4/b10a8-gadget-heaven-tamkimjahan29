
import { createBrowserRouter } from "react-router-dom"

import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Statistics from "../pages/Statistics"
import Dashboard from "../pages/Dashboard"

const routes = createBrowserRouter([
    {
      path:'/',
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/static',
            element:<Statistics></Statistics>
        },
        {
            path:'/dash',
            element:<Dashboard></Dashboard>
        }
      ]
    },
  ])





  export default routes 