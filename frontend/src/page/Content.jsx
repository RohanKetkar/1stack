import React from 'react'

const Content = () => {
  return (
    <div className="text-white">
      <h1 className="text-[41px] text-green-500 ml-[30vw] mt-[5vw]">Welcome <span className="text-green-200">{localStorage.getItem("username") ==null?"user":localStorage.getItem("username")}</span> to great build platform </h1>
    </div>
  )
}

export default Content