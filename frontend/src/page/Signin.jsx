import React from "react";

import Button from "../component/Button";
import {Link} from "react-router-dom"
import {useState} from "react"
import axios from "axios"

import Navbar from "./Navbar"

import { ToastContainer, toast } from 'react-toastify';
import {urle} from "../urle"
import {useNavigate} from "react-router-dom"
import {useContext} from "react"














import {CookieContext} from "./context"

import "./loade.css"
const Signin = () => {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")











const {cookie,setcookie} = useContext(CookieContext)

const [diamond,setdiamond]=useState(false)


    const navigate=useNavigate()
    async function signup(){



      setdiamond(true)


        let rese=await axios.post(urle+"signin",{
                email:email,
                password:password
        })


        setdiamond(false)

        
        if(rese?.data?.exituser?.username){
          localStorage.setItem("username",rese.data.exituser.username)

          navigate("/todo")


setcookie(rese.data.token)


          
        }


      localStorage.setItem("cookie",rese.data.token)


localStorage.setItem("email",rese.data.exituser.email)

        navigate("/todo")
    }
  return (
    <div>

      <Navbar/>
      {diamond ? <div><div className="loader"></div><h1 className="text-[28px] ml-[10vw] mt-8 bg-red-800 w-[80vw] p-8">We are processing your request || might be network issue</h1></div>:
    <div className=" bg-blue-800  gap-[81px] w-[96vw] p-8 ml-[1vw]">
      <div className="mb-8 ml-[10vw] text-[31px]">© Signin Form</div>
      <div className="gap-[41px] grid ml-[5vw]">
        <div>
          <label>email : </label>
          <input type="text" onChange={(e)=>setemail(e.target.value)} autoFocus="autofocus" className="w-[80vw]" />
        </div>
        <div>
            <label>password : </label>
        <input type="password" onChange={(e)=>setpassword(e.target.value)} className="w-[80vw]"/>
        </div>
        <Button title={"click"} color={"bg-orange-800 w-[50vw]"} onset={()=>signup()}/>
      </div>
      <div className="ml-[10vw]">
        redirect to <Link to="/signup" className="text-[#caf344] text-[31px] hover:text-orange-800">signup</Link>
        
      </div>
    </div>





  }

</div>





  );
};

export default Signin;
