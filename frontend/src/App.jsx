import react from "react"
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import ProctectedRoutes from "./components/ProctectRoutes"

function LogOut(){
  localStorage.clear()
  return <Navigate to="/login" />
}
function RegisterAndLogOut(){
  localStorage.clear()
  return <Register />
}
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <ProctectedRoutes><Home /></ProctectedRoutes>
      }/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterAndLogOut />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/logout" element={<LogOut />} />
    </Routes>

      
    </BrowserRouter>
  )
}

export default App
