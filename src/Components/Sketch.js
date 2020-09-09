import React, { useEffect, createRef, useRef } from "react";
import canvasSketch from "canvas-sketch";

const settings = {
  dimensions: "A4",
  orientation: "landscape",
  pixelsPerInch: 300,
  units: "cm",
};

const sketch = (sketchArgs) => {
  console.log("sketchArgs", sketchArgs);

  return ({ context, width, height }) => {
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, height);
  };
};

const Sketch = () => {
  const ref = createRef();
  //const ref = useRef();

  useEffect(() => {
    settings.canvas = ref.current;
    canvasSketch(sketch, settings);
  }, [ref]);

  return (
    <>
      <canvas ref={ref} />
    </>
  );
};

export default Sketch;
