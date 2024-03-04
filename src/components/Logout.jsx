
import Logout from '../assets/icons/logout.svg'
import { useAuth } from '../hook/useAuth'
export const LogoutButton = () => {
    const {setAuth} = useAuth()
    const handleLogout = () => {
        setAuth({})
        console.log('Logout')
    }
  return (
    <button onClick={handleLogout} className="icon-btn">
    <img src={Logout} alt="Logout" />
  </button>
    )
}
