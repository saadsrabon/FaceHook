import { Route, Routes,  } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Registration from "./pages/Registration"
import ProfilePage from "./pages/ProfilePage"
import NotFoundPage from "./pages/NotFoundPage"
import PrivateRoutes from "./routes/PrivateRoutes"




function App() {


  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes/>}>
        <Route path="/" element={<HomePage/>} />
        <Route path="/me" element={<ProfilePage/>} />

        </Route>
   
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Registration/>} />
        
        <Route path="*" element={<NotFoundPage/>} />
      
      </Routes>
  
    </>
  )
}

export default App
