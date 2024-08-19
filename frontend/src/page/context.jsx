import {createContext} from "react"

import {useState} from "react"
import {useEffect} from "react"
export const CookieContext = createContext("")

export const Cookiecontextprovider = ({children}) =>{
    const [cookie,setcookie]=useState("1")


useEffect(()=>{

    let cookie1=localStorage.getItem("cookie")

    setcookie(cookie1)
},[])

   return ( <CookieContext.Provider value={{cookie,setcookie}}>

{children}
    </CookieContext.Provider>
)
}