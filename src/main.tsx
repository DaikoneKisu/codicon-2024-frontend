import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Root } from './routes/Root'
import { ErrorPage } from './components/ErrorPage'
import { Login } from './components/auth/Login'
import { SignUp } from './components/auth/SignUp'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element: <SignUp />,
    errorElement: <ErrorPage />
  }
])

//import { Login } from './components/auth/Login'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
