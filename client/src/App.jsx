import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from "./pages/About"
import Projects from "./pages/Projects"
import Signin from "./pages/Signin"
import signup from "./pages/signup"
import Dashboard from "./pages/Dashboard"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>}/>
      <Route path="/Signin" element={<Signin/>}/>
      <Route path="/signup" element={<signup/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Projects" element={<Projects/>}/>

     </Routes>
    </BrowserRouter>
  )
}
