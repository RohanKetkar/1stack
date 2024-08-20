import { useState } from 'react'
import '../../src/App.css'
import {Routes,Route} from "react-router-dom"
import Navbar from "./Navbar"
import Main from "./Main"
import Signup from "./Signup"

import Signin from "./Signin"
import Dasboard from "./Dasboard"

import {useEffect} from "react"
import Content from "./Content"
import Todo from "./Todo"














import Layout from "./Layout"


import {useContext} from "react"






import {CookieContext} from "./context"









import Error from "./Error"









import Otp from "./Otp"

function Success() {
  const [count, setCount] = useState(0)
  const [cookie1,setcookie1]=useState("")














const {cookie} = useContext(CookieContext)



useEffect(()=>{

  let cookie=localStorage.getItem("cookie")
  if(cookie!=null){
    setcookie1(cookie)
  }else{
    setcookie1("")
  }
},[cookie1])

useEffect(()=>{

let cookie=localStorage.getItem("cookie")
if(cookie){
  setCount(true)
}else{
  setCount(false)
}
},[count])


useEffect(()=>{
  let cookie=localStorage.getItem("cookie")
  if(cookie){
    setCount(true)
  }else{
    setCount(false)
  }
  },[count])
  return (
    <>
{/* <Navbar count={count}/> */}
    <Routes>

      <Route path="/" element={<Navbar/>}/>
        <Route path="/main" element={<Main/>}/>

        <Route path="/signup" element={<Signup/>}/>

        <Route path="/signin" element={<Signin/>}/>

        { <Route path="/dasboard" element={<Dasboard/>}/>}
        







        {cookie ? <Route path="/todo" element={<Todo/>}/>: <Route path="/todo" element={<Signin/>}/>}












<Route path="/error" element={<Error/>}/>
        <Route path="/Otp" element={<Otp/>}/>
      </Routes>
    </>

  )
}

export default Success
