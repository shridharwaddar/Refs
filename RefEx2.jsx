import React,{useState,} from 'react'
import IMG from "./hanuman.jpg"
import { useRef } from 'react'
const RefEx2 = () => {
    let[photo,setPhoto]=useState(IMG)
    let[loading,setLoading]=useState(true)
    let ImgRef=useRef()
    let handleChange=()=>{
        if(loading==true){
            setLoading(!true)
            ImgRef.current.style.borderRadius="25%"
            ImgRef.current.style.border="2px solid purple"
        }
        else
        {
            setLoading(!false)
            ImgRef.current.style.borderRadius="0"
            ImgRef.current.style.border="none"
        }
    }
  return (
    <div>
    <img src={photo} alt="" ref={ImgRef} height="200px" width="150px"/>
    <button onClick={handleChange}>{loading? "ON":"OFF"}</button>
    </div>
  )
}

export default RefEx2