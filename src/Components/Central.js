import React from 'react';
import "../styles/Central.css"

const Central = (props)=>{
    return(
      <div className="central">
        {/*todas las apps*/}
        {props.children}
      </div>
    )
  }

  export default Central;