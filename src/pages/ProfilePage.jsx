import { useEffect, } from "react"

import useAxios from "../hook/useAxios"
import { useAuth } from "../hook/useAuth"
import { useProfile } from "../hook/useProfile"



const ProfilePage = () => {

 const {auth} = useAuth()

  const {api}=useAxios()
  // profile getter

 const {state,dispatch}=useProfile()
console.log(state)
useEffect(() => {
    dispatch({ type: 'START_FETCH_PROFILE' })
    api.get(`/profile/${auth?.user?.id}`)
        .then((response) => {
            dispatch({ type: 'FETCH_PROFILE_SUCCESS', payload: response.data })
            console.log(response.data)
        })
        .catch((error) => {
            dispatch({ type: 'FETCH_PROFILE_ERROR', payload: error })
        })
}, [api, auth?.user?.id, dispatch])
  return (
    <div className="container">
    {/* <!-- profile info --> */}
    <div className="flex flex-col items-center py-8 text-center">
      {/* <!-- profile image --> */}
      <div
        className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]"
      >
        <img
          className="max-w-full"
          src="./assets/images/avatars/avatar_1.png"
          alt="sumit saha"
        />

        <button
          className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
        >
        <img src="./assets/icons/edit.svg" alt="Edit" />
        </button>
      </div>
      {/* <!-- name , email --> */}
      <div>
        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
          {state?.user?.firstName}
        </h3>
        <p className="leading-[231%] lg:text-lg">{state?.user?.email}</p>
      </div>

      {/* <!-- bio --> */}
      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state?.user?.bio}
          </p>
        </div>
        {/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
        <button className="flex-center h-7 w-7 rounded-full">
          <img src="./assets/icons/edit.svg" alt="Edit" />
        </button>
      </div>
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </div>
    {/* <!-- end profile info --> */}

   
  </div>
  )
}

export default ProfilePage