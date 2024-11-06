
import { createBrowserRouter } from "react-router-dom"

import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Statistics from "../pages/Statistics"
import Dashboard from "../pages/Dashboard"
import Updated from "../components/Updated/Updated"
import PhoneCards from "../components/PhoneCards"

const routes = createBrowserRouter([
    {
      path:'/',
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=>fetch('../products.json'),
            children:[
                {
                    path:'/category/:category',
                    element:<PhoneCards></PhoneCards>,
                    loader: ()=>fetch('../Categories.json'),
                },
            ]
        },
        {
            path:'/static',
            element:<Statistics></Statistics>
        },
        {
            path:'/dash',
            element:<Dashboard></Dashboard>
        },
        {
            path:'/updated',
            element:<Updated></Updated>
        }
      ]
    },
  ])





  export default routes 