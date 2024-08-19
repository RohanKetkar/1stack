import React from 'react'

import "./loade.css"
const Content = () => {
  return (
    <div className="text-white">
      <h1 className="cont text-green-500  mt-[5vw]">Welcome <span className="text-green-200">{localStorage.getItem("username") ==null?"user":localStorage.getItem("username")}</span> to great build platform </h1>
    </div>
  )
}

export default Content