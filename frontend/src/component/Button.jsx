import React from 'react'

import {Link} from "react-router-dom"
const Button = ({title,onset,color,link}) => {
  return (
    <div>
        <Link to={link}>
        <button onClick={()=>onset()} className={color}>{title}</button>
        </Link>
    </div>
  )
}

export default Button