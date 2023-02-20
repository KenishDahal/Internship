import React from "react";
import "./style.css";
import useMouse from "./useMouse";
import { BsEyeSlash } from "react-icons/bs";

const MainBox = () => {
  console.log("rendering App");

  return (
    <div className="main-box">
      <MouseUpdater c="first" />
      <MouseUpdater c="second" />
      <MouseUpdater c="third" />
      <MouseUpdater c="fourth" />
    </div>
  );
};

export default MainBox;

const MouseUpdater = ({ c }) => {
  const { mousePos, handleMouseMove } = useMouse();

  return (
    <div className="app-div" onMouseMove={handleMouseMove}>
      <div className={c} style={{ left: mousePos.x, top: mousePos.y }}>
        x:{mousePos.x}, y:{mousePos.y}
      </div>
    </div>
  );
};

// import { useRef } from "react";
// import MouseUpdater from "./MouseUpdater.jsx";

// import "./style.css";

// const MainBox = () => {
//   const ref1 = useRef("1");
//   const ref2 = useRef("2");
//   const ref3 = useRef("3");
//   const ref4 = useRef("4");

// const value1= "first"
// const value2= "second"
// const value3= "third"
// const value4= "fourth"

//   console.log("rendering App");

//   return (
//     <div className="main-box" >
//  <MouseUpdater ref={ref1} value={value1}/>
//  <MouseUpdater ref={ref2} value={value2}/>
//  <MouseUpdater ref={ref3} value={value3}/>
//  <MouseUpdater ref={ref4} value={value4}/>
//      <div className="app-div" ref={ref1} >
//       {/* <MouseUpdater ref={ref1} /> */}
//      </div>

//      <div className="app-div" ref={ref2} >
//       {/* <MouseUpdater ref={ref2} /> */}
//      </div>
//      <div className="app-div" ref={ref3}>
//       {/* <MouseUpdater ref={ref3} /> */}
//      </div>
//      <div className="app-div" ref={ref4}>
//       {/* <MouseUpdater ref={ref4} /> */}
//      </div>
//     </div>
//   );
// };

// export default MainBox;
