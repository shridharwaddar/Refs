import React,{useState, useRef} from 'react'
import EYE from "./eye.jpg"
const Pwd = () => {
  let[password,setPassword]=useState(true)
  let[eye,setEye]=useState(eye)
   let inputRef=useRef()
   let imgRef=useRef()
   let showPassword=()=>{
    if(password==true)
    {
      setPassword(!true)
    }
    else
    {
      setPassword(!false)
    }
   }

  return (
    <div>
      <input type={password? "text":"password"}  />
      <img src={eye} alt=""  height="10px" width="10px" onClick={showPassword}/>
    </div>
  )
}

export default Pwd
