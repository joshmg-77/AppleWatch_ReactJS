import React from "react";
import "../styles/Notification.css";

const Notification = () => {
  
  const date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();
  let all = hours+":"+min;

  return (
    <div className="bottom">
      <p>{all}</p>
      <i class="fas fa-battery-half"></i>
    </div>
  );
};
export default Notification;
