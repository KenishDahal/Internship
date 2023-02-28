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

