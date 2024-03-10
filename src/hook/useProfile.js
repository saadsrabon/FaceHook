import { useContext } from "react"
import { ProfileContext } from "../context/providers/ProfileContext"

export const useProfile = () => {

  return (
    useContext(ProfileContext)
  )
}