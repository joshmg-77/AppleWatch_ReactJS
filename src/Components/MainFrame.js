import React,{useState} from 'react';
import Loading from "./Loading";
import Apps from "./IconApps";
import Central from "./Central";
import "../styles/MainFrame.css"

const MainFrame =(props)=>{
    //ShowApp separate UI 
  const [check,setCheck] = useState(false)
  const HandBlack=(a)=>{
   
    a.target.tagName !== "IMG" ?setCheck(true):alert("nada")
  }
    
    return(
      <div className="main" onClick={HandBlack}>
            {!props.bool?(<Loading/>):(
                <Central>
                  {check?alert():(<Apps Hand={props.Hand}/>)}
                  {/* <ViewApp />*/}
                </Central>
              )}
      </div>
    )
  }
/* este es el marco principal  
  cuando demos click a la parte negra de la pantalla se mostrara lo que seria la ViewHome remplaza a Apps dentron de central   

*/ 
  export default MainFrame;