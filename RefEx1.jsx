import React, { useRef } from 'react'

const RefEx1 = () => {
    let h1Ref=useRef()
    let handleChange=()=>{
        h1Ref.current.style.color="red"
        h1Ref.current.style.backgroundColor="black"
        h1Ref.current.style.border="2px solid "
    }
  return (
    <div>
        <h1 ref={h1Ref}>App Component</h1>
        <button onClick={handleChange}>Change</button>
    </div>
  )
}

export default RefEx1

