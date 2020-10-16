import React,{useEffect} from "react";
import "../styles/Home.css"
import appstore from "../assets/Home-xq/appstore.png";
import calendar from "../assets/Home-xq/calendar.png";
import gmail from "../assets/Home-xq/gmail.png";
import maps from "../assets/Home-xq/maps.jpg";
import photos from "../assets/Home-xq/applephotos.jpg";
import goolglePhotos from "../assets/Home-xq/googlephotos.png";


const Home = ()=>{
useEffect(()=>{
    document.querySelector(".main").style.background = "url('https://i.pinimg.com/736x/49/1f/f2/491ff2072f1cd64a0fa4f6469884d541.jpg')"
})
    return(
        <>
            <div className="twoApps">
                <div className="newWidget">
                    
                </div>
                <div>
                     <span className="C">90°</span>
                     <span><i className="fas fa-sun"></i></span>
                     <span className="clearSky">clear sky</span>  
                     <span className="wheater">wheater</span>
                </div>
            </div>
            <div className="appshome">
                <div>
                    <img src={appstore} className="icon" alt="" />
                    <p className="name">App Store</p>
                </div>
                <div>
                    <img src={gmail} className="icon" alt="" />
                    <p className="name">Gmail</p>
                </div>
                <div>
                    <img src={calendar} className="icon" alt="" />
                    <p className="name">Calendar</p>
                </div>
                <div>
                    <img src={photos} className="icon" alt="" />
                    <p className="name">Photos</p>
                </div>
                <div>
                    <img src="https://i.redd.it/t3emig5is5751.png" className="icon" alt="" />
                    <p className="name">Photos</p>
                </div>
                <div>
                    <img src="https://cdn.dribbble.com/users/272916/screenshots/1360124/messaging.jpg?compress=1&resize=400x300" className="icon" alt="" />
                    <p className="name">Message</p>
                </div>
                <div>
                    <img src={maps} className="icon" alt="" />
                    <p className="name">Maps</p>
                </div>
                <div>
                    <img src="https://www.macobserver.com/wp-content/uploads/2019/04/ios-contacts-icon-1200w.jpg" className="icon" alt="" />
                    <p className="name">Contacts</p>
                </div>
            </div>
        </>
    )
}


export default Home