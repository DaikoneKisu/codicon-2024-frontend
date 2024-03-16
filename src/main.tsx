import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//import { Login } from './components/auth/Login'
import { Dashboard } from './components/Dashboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login/>}/>*/}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
