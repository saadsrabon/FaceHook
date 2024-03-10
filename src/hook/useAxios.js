import { useEffect } from "react";
import { api } from "../axios/api";
import { useAuth } from "./useAuth";

const useAxios = () => {
const { auth ,setAuth } = useAuth();
useEffect(() => {
    // interceptor request for axios
   const requestInterceptor= api.interceptors.request.use(
        (config) => {
            const token = auth?.authToken;
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    // interceptor response for axios
    const responseInterceptor=api.interceptors.response.use(
        (response) => {
            return response;
        },
        async(error) => {
            const originalRequest = error.config;
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try{
                    const refreshToken = auth?.refreshToken;
                const response = await api.post("/auth/refresh", {
                    refreshToken,
                });
                if (response.status === 200) {
                    const { token } = response.data;
                    console.log(`Token new ${token}`);
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    setAuth({ ...auth, authToken: token });
                    return api(originalRequest);
                }
                }catch(error){
                    console.log(error);
                    setAuth({});
                }
            }
            return Promise.reject(error);
        }
    );
    return () => {
        api.interceptors.request.eject(requestInterceptor);
        api.interceptors.response.eject(responseInterceptor);
    };
}
, [auth.authToken]);


return {api}

};

export default useAxios;