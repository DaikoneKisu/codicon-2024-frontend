import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import './index.css'
import { Root } from './routes/Root'
import { ErrorPage } from './components/ErrorPage'
import { Login } from './components/auth/Login'
import { SignUp } from './components/auth/SignUp'
import { Dashboard } from './components/Dashboard'

const Prueba = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!document.cookie.includes('auth')) {
      navigate('/login')
    }
  }, [])

  return (
    <div>
      <h1>Prueba</h1>
    </div>
  )
}

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
  },
  {
    path: '/prueba',
    element: <Prueba />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
