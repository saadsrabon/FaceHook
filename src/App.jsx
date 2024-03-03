import { Route, Routes,  } from "react-router-dom"




function App() {


  return (
    <>
      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/me" component={ProfilePage} />
        <Route path="*" component={NotFoundPage} />
      
      </Routes>
  
    </>
  )
}

export default App
