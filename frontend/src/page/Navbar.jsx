import React from 'react'

import {Link} from "react-router-dom"
import {useEffect} from "react"
import {useState}from "react"
import Content from "./Content"

import {useNavigate} from "react-router-dom"



















import {useContext} from "react"

import {CookieContext} from "./context"
import { ToastContainer, toast } from 'react-toastify';
const Navbar = () => {
  // console.log("rerender")
  const[cookie1,setcookie1]=useState(false)
const[state,setstate]=useState(true)


const {cookie,setcookie} = useContext(CookieContext)











  const navigate=useNavigate()
  useEffect(()=>{

let cookie1 = localStorage.getItem("cookie")
  if(cookie1){
    setcookie1(true)
  }else{
    setcookie1(false)
  }
},[cookie1])
useEffect(()=>{
  setstate(!state)
},[])
// console.log("state",state)




async function logout(){

  let cookie1 =  localStorage.removeItem("cookie")
  let username=localStorage.removeItem("username")
console.log("logout")

  // navigate("/logout")





toast("logout")

  setcookie(false)
  navigate("/")
}
  return (
    <div>
      

    <div className="navediv text-[18px]">
      <Link to="/">
      <div onClick={()=>navigate("/navigate")}>secret</div>

      </Link>
      <div className="div bg-black">
        {cookie ?<div onClick={()=>logout()}>Logout</div>:<Link to="/signup">
        <li>Signup</li>
        </Link>
      }
      {cookie ?"":<Link to="/signin">
        <li>Signin</li>
        </Link>
      }
      {cookie? <Link to="/todo">
        <li onClick={()=>setstate(!state)} state={state} setstate={setstate}>Todo</li>
        </Link>:""
      }
      { cookie?<Link to="/dasboard">
        <li>Dasboard</li>
        </Link>
        :""
      }






<Link to="/otp">otp</Link>

      </div>
    </div>

    <Content/>
    </div>

  )
}

export default Navbar