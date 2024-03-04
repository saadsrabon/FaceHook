/* eslint-disable react/prop-types */
import { useState } from "react";
import { AuthContext } from "../AuthContext";


export const AuthProvider = ({ children }) => {

    const [auth,setAuth] = useState(null);
  
    

    
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
        </AuthContext.Provider>
    );
    }