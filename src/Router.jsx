import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import ErrorPage from './ErrorPage';


const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
     
    ],
  },

]);

export default router;
