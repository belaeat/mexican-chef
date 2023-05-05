import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Blog from './components/Blog/Blog';
import ChefsPage from './components/ChefsPage/ChefsPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './providers/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'chefspage/:id',
        element: <PrivateRoute><ChefsPage></ChefsPage></PrivateRoute>,
        loader: ({ params }) => fetch(`https://b7a10-mexican-chef-server-side-belaeat.vercel.app/chefs/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
