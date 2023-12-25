import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import ErrorPage from './ErrorPage';
import HomePage from '../src/page/homepage/HomePage'
import Login from './page/login/Login';
import Register from './page/Register/Register';

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

]);

export default router;
