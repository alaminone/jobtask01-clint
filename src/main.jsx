import React from 'react'
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import './index.css'

import router from './Router.jsx'
import { AppProvider } from './Authprovider/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AppProvider>
      <RouterProvider router={router} />
      </AppProvider>
    
  </React.StrictMode>,
)
