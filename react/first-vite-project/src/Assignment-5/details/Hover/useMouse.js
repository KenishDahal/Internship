// import React , {forwardRef} from "react";
import { useState } from "react";
 
const useMouse =() =>{

    const [mousePos, setMousePos] = useState(
        {
            x:null,
            y: null
        }
        );

   const handleMouseMove= (e) => {
        setMousePos({
            x: e.clientX,
            y: e.clientY
        })
    }
    // useEffect(() => {

    //   const listener = window.addEventListener("mousemove", (e) => {
    //     setMousePos({ x: e.clientX, y: e.clientY });
    //   });

    //   return () => window.removeEventListener("mousemove", listener);
    // }, [mousePos]);

    return {mousePos,handleMouseMove}
}

export default useMouse;