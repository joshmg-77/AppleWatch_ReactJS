import React,{useState} from 'react';
import Loading from "./Loading";
import AppsIcons from "./IconApps";
import Central from "./Central";
import ViewApp from "./ViewApp";
import Notification from "./Notification";
import Home from "./Home";
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
                  
                 
                  {check?(<><Notification/>
                  <Home/></>):(<AppsIcons Hand={props.Hand}/>)}
                  {/*de acuerdo con el onclick y el nombre de la app se le pasa al viewApp y con css le damos jerarquia o con js ocultamos appsicons*/}
                  {/*<ViewApp nameApp={"nombre app"}/>*/}
                </Central>
              )}
      </div>
    )
  }
/* este es el marco principal  
  cuando demos click a la parte negra de la pantalla se mostrara lo que seria la ViewHome remplaza a Apps dentron de central   

*/ 
  export default MainFrame;