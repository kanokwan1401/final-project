import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Course from './pages/Course.tsx'
import Home from './pages/Home.tsx'
import Lecture from './pages/Lecture.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Course />} />
          <Route path='/lecture' element={<Lecture />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
