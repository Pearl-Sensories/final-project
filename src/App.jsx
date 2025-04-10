import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login'
import Home from './pages/Home'
import Createaccount from './pages/Createaccount'
import Signup from './pages/Signup'
import Termscondi from './pages/Termscondi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      
    <Route path='/' element={<Home/>}></Route>
      <Route path='/createaccount' element={<Createaccount/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/createaccount/<signup/>' element={<Signup/>}></Route>
      <Route path='/createaccount/<signup/>/<terms/>' element={<Termscondi/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App;
