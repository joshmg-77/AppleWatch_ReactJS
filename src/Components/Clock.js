import React,{useState,useEffect} from 'react';
import Buttons from "./Buttons";
import Notification from "./Notification"
import MainFrame from "./MainFrame"
import "../styles/Clock.css"

const Clock =()=>{
    const [bool,setBool] = useState(false);
    const [ShowAppl,setShowAppl] = useState([]);
    useEffect(()=>{
      setTimeout(()=>setBool(true),3300)
    },[bool])
    const ShowApp =(e)=>{
        alert(e.target.name)
        
        setShowAppl([...ShowAppl,e.target.name])
    }
    return(
         <div className="clock">
            <Buttons/>
            <Notification/>
            <MainFrame bool={bool} Hand={ShowApp} />
            
         </div>
      ) 
  }
  export default Clock;