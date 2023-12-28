import { createContext, useState } from "react";

export const authContext=createContext();


export const AuthProvider=({children})=>{
    
   const [data,setData]=useState(false);

    return <authContext.Provider value={{data,setData}} >{children}</authContext.Provider>

}