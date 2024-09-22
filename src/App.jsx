
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/blogs/Home'
import AddBlog from './pages/blogs/AddBlog'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/addblog" element={<AddBlog/>}></Route>
        
        </Routes>
      
      
      </BrowserRouter>
    </>
  )
}

export default App
