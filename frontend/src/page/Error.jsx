import React from "react";

import { useState } from "react";

import { useEffect } from "react";


import {useNavigate} from "react-router-dom"


const Error = () => {
  const [count, setcount] = useState(10);
const navigate=useNavigate()
  useEffect(() => {
    if (count !=0) {
      const timer = setInterval(() => {
        setcount(prevCount => prevCount - 1);
      }, 1000); // increment every 1 second
      return () => clearInterval(timer); // cleanup interval on unmount or count update

    }
    navigate("/signup")
  }, [count]);
  return (
    <div className="w-[100vw] text-[21px] flex flex-col justify-center items-center h-[80vh] ml-8">
      <h1>User is already is exist Make another account or signin</h1>

      <h1 className="ml-[-10vw] flex mt-8">Redirecting to signup page in <span className="text-green-500 text-[31px] ml-1 mt-[-8px]">{count}</span></h1>
    </div>
  );
};

export default Error;
