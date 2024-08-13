import React from "react";

import Button from "../component/Button";//component use in page take prop
import axios from "axios";

import {urle} from "../urle"
const Main = () => {
  // console.log("axios",axios)

  async function onclick() {
    console.log("onclick");
    const res1 = await axios.post(// axios.post is send request to backend example
      urle+"signup",
      {
        data: { username: "1", password: "1" }, // username:username get from state variable
        headers: {
          Authorization: "Bearer 1",// Authorization:localStorage.getItem("token")
        },
      }
    );
    console.log(res1);
  }

  async function onclick1() {
    console.log("onclick1");
const res1 = await axios.get(urle+"get1")
console.log(res1)
  }
  return (
    <div>
      Main
      <Button // Button component use same button component but two new button
        title={"click"}
        onset={onclick}
        color={"text-orange-800 bg-blue-800"}
        link={"/link"}
      />
      <Button
        title={"click1"}
        onset={onclick1}
        color={"text-blue-600 bg-orange-600"}
        link={"/link1"}
      />
    </div>
  );
};

export default Main;
