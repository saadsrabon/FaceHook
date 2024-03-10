
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hook/useAuth'
import Header from '../components/common/Header'
import ProfileProvider from '../context/providers/ProfileProvider'

const PrivateRoutes = () => {
    const {auth} = useAuth()
  return (
    <>
      {
        auth?.user?(
            <>
            <ProfileProvider>
            <Header/>
            <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
            
            <Outlet/>
            </div>
            </main>
            </ProfileProvider>
            </>
            ):(
            <Navigate to="/login" replace/>
        )
      }
    </>
  )
}

export default PrivateRoutes