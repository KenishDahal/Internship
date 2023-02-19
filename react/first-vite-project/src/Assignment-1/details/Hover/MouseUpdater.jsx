import { useState, forwardRef, useEffect } from "react";

const MouseUpdater = forwardRef((props, ref) => {
  console.log("rendering MouseUpdater");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const div = ref.current;
    const listener = div.addEventListener("mousemove", (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });

    return () => div.removeEventListener("mousemove", listener);
  }, [ref]);

  return (
    <>{ mousePos.y < 254 &&
      <div className="first-cursor" style={{left: mousePos.x,top: mousePos.y}}>
     x:{mousePos.x}, y:{mousePos.y}
    </div>
    }
    
    { mousePos.y > 254 &&
      <div className="second-cursor" style={{left: mousePos.x,top: mousePos.y}}>
        x:{mousePos.x}, y:{mousePos.y}
    </div>
    }
    { mousePos.x > 598 &&
      <div className="third-cursor" style={{left: mousePos.x,top: mousePos.y}}>
  x:{mousePos.x}, y:{mousePos.y}
    </div>
    }
    
    {  mousePos.y > 254 && mousePos.x > 598 &&
      <div className="fourth-cursor" style={{left: mousePos.x,top: mousePos.y}}>
       x:{mousePos.x}, y:{mousePos.y}
     </div>
    }
    </>
  );
});

export default MouseUpdater;