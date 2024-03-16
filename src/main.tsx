import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CreateChallenge } from './components/challenges/CreateChallenge'

//import { Login } from './components/auth/Login'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CreateChallenge />
  </React.StrictMode>
)
