import React from 'react'

import Success from "./page/Success"
import {Routes,Route} from "react-router-dom"
import Signup from "./page/Signup"
import Layout from "./page/Layout"
const App = () => {
  return (
    <>
    <Routes>
    {/* <Route path="/" element={<Layout/>}/> */}
      <Route path="/*" element={<Success/>}/>
      
      </Routes>
</>
  
  )
}

export default App