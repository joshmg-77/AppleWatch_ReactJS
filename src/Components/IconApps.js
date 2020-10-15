import React,{Fragment} from 'react';
import "../styles/Apps.css";
import Maps from "../assets/icon-and-image-small-icon-maps.jpg";
import weather from "../assets/icon-and-image-small-icon-weather.jpg";
import mail from "../assets/icon-and-image-small-icon-mail.jpg";
import timer from "../assets/icon-and-image-small-icon-timer.jpg";
import phone from "../assets/icon-and-image-small-icon-phone.jpg";
import fitness from "../assets/icon-and-image-small-icon-fitness.jpg";
import settings from "../assets/icon-and-image-small-icon-settings.jpg";
import activity from "../assets/featured-content-watchos-activity-icon_2x.png";
import heart from "../assets/watchos6-heart-rate-icon.png";
import spotify from "../assets/image_icon_spotify_pic_512x512.png";




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

