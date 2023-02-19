import { useRef } from "react";
import MouseUpdater from "./MouseUpdater.jsx";

import "./style.css";

const MainBox = () => {
  const ref = useRef();
  console.log("rendering App");

  return (
    <div className="main-box" ref={ref}>

     <div className="app-div" >
      <MouseUpdater ref={ref} />
     </div>
     <div className="app-div" >
      <MouseUpdater ref={ref} />
     </div>
     <div className="app-div" >
      <MouseUpdater ref={ref} />
     </div>
     <div className="app-div">
      <MouseUpdater ref={ref} />
     </div>
    </div>
  );
};

export default MainBox;