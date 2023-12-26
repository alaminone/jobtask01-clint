import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import ErrorPage from './ErrorPage';
import HomePage from '../src/page/homepage/HomePage'
import Login from './page/login/Login';
import Register from './page/Register/Register';
import PrivateRoutes from './PrivateRoutes';
import DrawerLayout from './Dashboard/DrawerLayout/DrawerLayout';
import NewTask from './Dashboard/NewTask/NewTask';
import EditTask from './Dashboard/EditTask/EditTask';
import ProfileDetails from './Dashboard/ProfileDetails/ProfileDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
     {
      path:"/",
      element: <HomePage></HomePage>
     },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
      path:'/register',
      element:<Register></Register>
     }
    ],
  },
  {
    path: '/dashBroad',
    element: (
  <PrivateRoutes>
     <DrawerLayout></DrawerLayout>
  </PrivateRoutes>
   
     
    ),
    children: [
      { path: 'newTask',
       element: <NewTask></NewTask>
      },
      { path: 'editTask',
       element: <EditTask></EditTask>
      },
      { path: 'profile',
       element: <ProfileDetails></ProfileDetails> 
      },
    ],
  },

]);

export default router;
