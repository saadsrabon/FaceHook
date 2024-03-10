/* eslint-disable react/prop-types */
import {  useReducer} from "react";
import { ProfileContext } from "./ProfileContext";
import { ProfileReducers } from "../../reducers/ProfileReducers";



const ProfileProvider = ({ children }) => {
    const initialState = {
        user: {},
        posts: [],
        loading: false,
        error: null,
    
    }
    const [state, dispatch] = useReducer(ProfileReducers, initialState)
    return (
        <ProfileContext.Provider value={{state,dispatch}}>
        {children}
        </ProfileContext.Provider>
    );
    }

    export default ProfileProvider;