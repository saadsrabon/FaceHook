import { Route, Routes,  } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Registration from "./pages/Registration"
import ProfilePage from "./pages/ProfilePage"
import NotFoundPage from "./pages/NotFoundPage"




function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/me" element={<ProfilePage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      
      </Routes>
  
    </>
  )
}

export default App
