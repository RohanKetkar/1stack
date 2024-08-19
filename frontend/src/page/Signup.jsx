import React from "react";

import Button from "../component/Button";
import {Link} from "react-router-dom"
import {useState} from "react"
import axios from "axios"

import Navbar from "./Navbar"

import { ToastContainer, toast } from 'react-toastify';
import {urle} from "../urle"
import {useNavigate} from "react-router-dom"















import "./loade.css"


const Signup = (e) => {




  

    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [email,setemail]=useState("")










const [diamond,setdiamond]=useState(false)

    
    const navigate=useNavigate()











    async function signup(){

console.log(username,password,email)

console.log("signup")




setdiamond(true)


        let rese=await axios.post(urle+"signup",{

                username:username,
                email:email,
                password:password,
        })
console.log(rese?.data)


setdiamond(false)





        if(rese?.data?.success){
          navigate("/signin")
        }
        if(rese?.data?.message=="exit"){
          navigate("/error")
        }
        
    }
  return (
    <div>

      <Navbar/>
    {
      
      
      
      diamond ? <div><div className="loade"></div><h1 className="text-[28px] p-8 ml-[10vw] bg-red-800 w-[80vw]">We are processing your signup request || might be network issue</h1></div>:
      
      <div className=" bg-blue-800 signup gap-[81px] w-[98vw] p-8 m-auto">
      <div className="mb-8 ml-[10vw] text-[31px]">© Signup Form</div>
      <div className="gap-[41px] grid ml-[10vw]">
        <div>
          <label>username : </label>
          <input type="text" onChange={(e)=>setusername(e.target.value)} autoFocus="autofocus" className="w-[70vw]  "/>
        </div>
        <div>
            <label>password : </label>
        <input type="password" onChange={(e)=>setpassword(e.target.value)} className="w-[70vw]"/>
        </div>
        <div>
          <label>email : </label>
          <input type="text" onChange={(e)=>setemail(e.target.value)} autoFocus="autofocus" className="w-[70vw]  "/>
        </div>
        <Button title={"click"} color={"bg-orange-800 w-[50vw]"} onset={(e)=>signup(e)}/>
      </div>
      <div className="ml-[10vw]">
      Redirect to <Link to="/signin" className="text-[#c1f21d] text-[31px] hover:text-orange-800">signin</Link>
      </div>
    </div>}

</div>
  );
};

export default Signup;
