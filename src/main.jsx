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
import MyList from './Component/MyList/MyList';
import Detailspage from './Component/DetailsPage/Detailspage';
import UpdatePost from './Component/UpdatePost/UpdatePost';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
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
    },{
      path:'/myList',
      element:(<PrivateRoute>
        <MyList></MyList>
      </PrivateRoute>)
    },{
      path:'/detailsPage/:id',
      element:<Detailspage></Detailspage>
    },{
      path:'/updatePost/:id',
      element:<UpdatePost></UpdatePost>,
      loader : (params) => fetch(`http://localhost:5000/updatePost/${params.id}`)
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
