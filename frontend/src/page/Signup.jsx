import React from "react";

import Button from "../component/Button";
import {Link} from "react-router-dom"
import {useState} from "react"
import axios from "axios"

import Navbar from "./Navbar"

import {urle} from "../urle"
import {useNavigate} from "react-router-dom"
const Signup = () => {
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")

    const navigate=useNavigate()
    async function signup(){
        let rese=await axios.post(urle+"signup",{
                username:username,
                password:password
        })
console.log(rese)
        if(rese.data.success){
          navigate("/signin")
        }
        
    }
  return (
    <div>

      <Navbar/>
    <div className=" bg-blue-800 max-w-[60vw] gap-[81px] ml-[10vw] p-8">
      <div className="mb-8 ml-[10vw] text-[31px]">© Signup Form</div>
      <div className="gap-[41px] grid ml-[10vw]">
        <div>
          <label>username : </label>
          <input type="text" onChange={(e)=>setusername(e.target.value)} autoFocus="autofocus" />
        </div>
        <div>
            <label>password : </label>
        <input type="password" onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <Button title={"click"} color={"bg-orange-800 w-[10vw]"} onset={()=>signup()}/>
      </div>
      <div className="ml-[10vw]">
        redirect to <Link to="/signin" className="text-yellow-600 text-[31px] hover:text-orange-800">signin</Link>
      </div>
    </div>

</div>
  );
};

export default Signup;
