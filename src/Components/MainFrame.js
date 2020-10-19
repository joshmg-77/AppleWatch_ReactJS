import React, { useState } from "react";
import Loading from "./Loading";
import AppsIcons from "./IconApps";
import Central from "./Central";
import Notification from "./Notification";
import Home from "./Home";
import "../styles/MainFrame.css";

const MainFrame = (props) => {
  const [check, setCheck] = useState(false);

  const HandBlack = (a) => {
    if (a.target.tagName !== "IMG") setCheck(true);
  };

  return (
    <div className="main" onClick={HandBlack}>
      {!props.bool ? (
        <Loading />
      ) : (
        <Central>
          {check ? (
            <>
              <Notification />
              <Home />
            </>
          ) : (
            <AppsIcons Hand={props.Hand} />
          )}
        </Central>
      )}
    </div>
  );
};
/* este es el marco principal  
  cuando demos click a la parte negra de la pantalla se mostrara lo que seria la ViewHome remplaza a Apps dentron de central   

*/
export default MainFrame;
