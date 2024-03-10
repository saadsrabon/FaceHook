import { useAuth } from "../hook/useAuth"


const HomePage = () => {
  const data =useAuth()
  console.log(data)
  return (
    <div className="text-white">HomePage</div>
  )
}

export default HomePage