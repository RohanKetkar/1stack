import React from 'react'

import Navbar from "./Navbar"




import {useEffect} from "react"

import {urle} from "../urle"
import axios from "axios"

import {useState} from "react"
const Dasboard = () => {
  const [todo1,settodo1]=useState([])


  const [count,setcount]=useState(0)

async function get1(){
try{
  let rese=await axios.get(urle+"get1",{
    headers:{
      Authorization:localStorage.getItem("cookie")
    }
  })

toast("todo")

  console.log(rese?.data?.todo?.todo[0].markasdone)


  if(rese?.data?.success===true){
    console.log("Working")
    for(let i=0;i<rese?.data?.todo?.todo?.length;i++){
      if(rese?.data?.todo?.todo[i]?.markasdone===true){
        setcount(prev=>prev+1)
      }
      else{
        i++
      }
    }
    settodo1(rese?.data?.todo?.todo)
  }
}catch(e){
  console.log(e)
}
}
useEffect(()=>{
  get1()









  console.log(todo1)
},[])

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="bg-blue-400 text-[black] text-[41px] font-bold flex flex-col justify-center items-center w-[80vw] ml-[5vw]">
      <h1>Dasboard</h1>
      <div>

 <h1>number is todo : <span>{todo1.length}</span></h1>

<h1>completed is todo : <span>{count}</span></h1> 

<h1>remaining is todo : <span>{todo1.length-count}</span></h1> 

<h1>Lets complete todo ⭐️</h1>
</div>
      </div>
      </div>
  )
}

export default Dasboard