import React from "react";

import { useState } from "react";

import { useEffect } from "react";

import { urle } from "../urle";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"

import {urle} from "../urle"

const Otp = () => {
  const [otp, setotp] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [cookie, setcookie] = useState("");

  const [diamond, setdiamond] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let email1 = localStorage.getItem("email");
    setcookie(email1);
    
  }, []);

  async function getotp() {
    try {
      setdiamond(true);
      let rese = await axios.get(
        urle + "secretedata" + "/" + cookie ||
          localStorage.getItem("email")
      );

      setdiamond(false);
    } catch (e) {
    }
  }

  async function password1() {
    try {
      setdiamond(true);

      let rese = await axios.post(
        urle + "password" + "/" + cookie,
        {
          otpe: otp,
          password: password,
        }
      );

      setdiamond(false);

      navigate("/signin");
    } catch (e) {
    }
  }

 

  return (
    <div className="">
        <Navbar/>
      {diamond?<div className="loader">sending otp </div>:
      <div className="bg-blue-600 p-8" >
      <div className="m-8"><label>otp : </label>
      <input
        type="text"
        onChange={(e) => setotp(e.target.value)}
        className="w-[80vw]"
      /></div>
      <div className="ml-8">
      <label>password : </label>
      <input
        type="text"
        onChange={(e) => setpassword(e.target.value)}
        className="w-[80vw]"
      />
      </div>
      <button onClick={() => getotp()} className="bg-[#e05858] m-8 w-[80vw]">
        getotp
      </button>
      <button onClick={() => password1()} className="bg-[#ec5353] m-8 w-[80vw]">
        add1
      </button>
      
      
      
      
      
    </div>

      }
    </div>
  );
};

export default Otp;
