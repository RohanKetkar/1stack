import React from 'react'

import {Link} from "react-router-dom"
import {useEffect} from "react"
import {useState}from "react"
import Content from "./Content"

import {useNavigate} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
const Navbar = () => {
  // console.log("rerender")
  const[cookie,setcookie]=useState(false)
const[state,setstate]=useState(true)














  const navigate=useNavigate()
  useEffect(()=>{

let cookie = localStorage.getItem("cookie")
  if(cookie){
    setcookie(true)
  }else{
    setcookie(false)
  }
},[cookie])
useEffect(()=>{
  setstate(!state)
},[])
// console.log("state",state)




async function logout(){

  let cookie =  localStorage.removeItem("cookie")
  let username=localStorage.removeItem("username")
console.log("logout")

  // navigate("/logout")





toast("logout")

  setcookie(false)
  navigate("/")
}
  return (
    <div>
      <li className="text-white">item</li>

    <div className="navediv">
      <Link to="/">
      <div onClick={()=>navigate("/navigate")}>secret</div>

      </Link>
      <div className="div">
        {cookie ?<div onClick={()=>logout()}>Logout</div>:<Link to="/signup">
        <li>Signup</li>
        </Link>
      }
      {cookie ?"":<Link to="/signin">
        <li>Signin</li>
        </Link>
      }
      { <Link to="/todo">
        <li onClick={()=>setstate(!state)} state={state} setstate={setstate}>Todo</li>
        </Link>
      }
      { cookie?<Link to="/dasboard">
        <li>Dasboard</li>
        </Link>
        :""
      }
      </div>
    </div>

    <Content/>
    </div>

  )
}

export default Navbar