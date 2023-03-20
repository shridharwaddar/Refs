import React, { Component, createRef } from 'react'

export default class Event2 extends Component {
    constructor()
    {
        super()
        this.state={
            company:"Qspider"
        }
        this.spanRef=createRef()
        this.btnRef=createRef()
    }
   
  render() {
    return (
      <div>
        <span ref={this.spanRef}>{this.state.company}</span>
        <br />
        <button ref={this.btnRef} onClick={()=>{
            this.setState({company:"Jspider"})
            this.spanRef.current.style.color="Orange"
            this.spanRef.current.style.border="2px solid purple"
            this.spanRef.current.style.padding="2px"
            this.spanRef.current.style.margin="20px"
            this.spanRef.current.style.backgroundColor="red"
            this.btnRef.current.style.color="red"
            this.btnRef.current.style.backgroundColor="black"
            this.btnRef.current.style.borderRadius="25%"
        }}  >Change</button>
      </div>
    )
  }
}

