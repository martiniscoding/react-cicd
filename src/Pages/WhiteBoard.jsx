import React, { useRef, useState } from "react";
import { Line, Stage, Layer } from "react-konva";

function WhiteBoard() {
  const stageRef = useRef();
  const [isDrawing, setisDrawing] = useState(false);
  const [points, setPoints] = useState([]);
  const [lines,setlines]=useState([])
  const onMouseDown = () => {
    setisDrawing(true)
    const position = stageRef.current.getPointerPosition();
   if(!isDrawing) return 
    setPoints((prev) => [...prev, position.x, position.y]);
  };
  const onMouseMove = () => {
    if(!isDrawing) return 
    const position = stageRef.current.getPointerPosition();
    setPoints((prev) => [...prev, position.x, position.y]);
  };
  const onMouseUp = () => {
    setisDrawing(false);
  };
  return (
    <div className="overflow-hidden">
     
      <Stage
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer>
          <Line stroke="black" points={points} width={2}></Line>
        </Layer>
      </Stage>
    </div>
  );
}

export default WhiteBoard;
