import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayput/MainLayout';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Homes from './Component/Homes/Homes';
import Login from './Component/Login/Login';
import Ragestration from './Component/Regestration/Ragestration';
import AuthProvider from './AuthProvider.jsx/AuthProvider';
import Contacts from './Component/Contacts/Contacts';
import Aboutus from './Component/AboutUs/Aboutus';
import AddturestSport from './Component/AddTurestSpots/AddturestSport';
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {   
                
        path:'/',
        element:<Homes></Homes>
        
      
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Ragestration></Ragestration>
    },
    {
        path:'/aboutUs',
        element:<Aboutus></Aboutus>
    },
    {
        path:'/contacts',
        element:<Contacts></Contacts>

    },
    {
        path:'/addturest',
        element:<AddturestSport></AddturestSport>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
