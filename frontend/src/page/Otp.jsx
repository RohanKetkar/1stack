import React from 'react'

import {useState} from "react"




import {useEffect} from "react"

import { urle } from '../urle'
import axios from "axios"
const Otp = () => {
const [otp,setotp]=useState("")
const [password,setpassword]=useState("")
















async function getotp(){
    
    try{
        console.log("rese")
        let rese = await  axios.get(urle+"secretedata",{
            headers:{
                "Authorization":localStorage.getItem("cookie")
            }
        })
        console.log(rese)
    }catch(e){
        console.log(e)}
}




async function password1(){

    try{
        let rese = await axios.post(urle+"password",{
            otpe:otp,password:password,
                headers:{
                    "Authorization":localStorage.getItem("cookie")
                
            },
        })
        console.log(rese)

    }catch(e){
        console.log(e)}
}


useEffect(()=>{


},[])

  return (
    <div className="flex flex-col bg-blue-600 justify-center items-center gap-1 text-[21px]">Otp
<label>otp : </label>
    <input type="text" onChange={(e)=>setotp(e.target.value)} className="w-[80vw]"/>
    




<label>password : </label>

    <input type="text" onChange={(e)=>setpassword(e.target.value)} className="w-[80vw]"/>

    <button onClick={()=>getotp()} className="bg-[#e05858] m-8 w-[80vw]">getotp</button>
    




<button onClick={()=>password1()} className="bg-[#ec5353] m-8 w-[80vw]">add1</button>


    </div>
    
  )
}

export default Otp