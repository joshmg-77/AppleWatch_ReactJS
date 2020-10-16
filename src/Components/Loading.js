import React from 'react';
import "../styles/Loading.css"
import appleLogo from "../assets/Loader/apple-logo.svg"
const Loading =()=>{
    return(
      <div className="apple">
        <img alt="" src={appleLogo} /> 
      </div>
    )
  }

  export default Loading;