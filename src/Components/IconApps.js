import React,{Fragment} from 'react';
import "../styles/IconApps.css";
import Maps from "../assets/InitIcons/maps.jpg";
import weather from "../assets/InitIcons/weather.jpg";
import mail from "../assets/InitIcons/mail.jpg";
import timer from "../assets/InitIcons/timer.jpg";
import phone from "../assets/InitIcons/phone.jpg";
import fitness from "../assets/InitIcons/fitness.jpg";
import settings from "../assets/InitIcons/settings.jpg";
import activity from "../assets/InitIcons/activity.png";
import heart from "../assets/InitIcons/heart.png";
import spotify from "../assets/InitIcons/spotify.png";




const Apps = (props)=>{
    return(
      <Fragment>
        <div className="sq"><img alt="" src={Maps} className="img" name="maps" onClick={(e)=>props.Hand(e)} /></div>

      <div className="sq"><img alt="" className="img" src={weather} /></div>

      <div className="sq"><img alt="" className="img" src={mail} /></div>

      <div className="sq"><img alt="" className="img" src={timer} /></div>

      <div className="sq"><img alt="" className="img" src={phone} /></div>

      <div className="sq"><img alt="" className="img" src={fitness} /></div>

      <div className="sq"><img alt="" className="img" src={settings} /></div>

      <div className="sq"><img alt="" className="img" src={activity} /></div>

      <div className="sq"><img alt="" className="img" src={heart} /></div>

      <div className="sq"><img alt="" className="img" src={spotify} /></div>
      </Fragment>
    )
  }

  export default Apps;

