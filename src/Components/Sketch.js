import React, { useEffect, createRef, useRef } from "react";
import canvasSketch from "canvas-sketch";
import styled from "styled-components";

const settings = {
  dimensions: [2048, 2048],
};

const createGrid = () => {
  const points = [];
  const count = 5;
  for (let x = 0; x < count; x++) {
    for (let y = 0; y < count; y++) {
      // Switching to a [u,v] co-ordiante system
      const u = x / count;
      const v = x / count;
      points.push([u, v]);
    }
  }
  return points;
};

const sketch = (sketchArgs) => {
  const points = createGrid();
  console.log(points);

  return ({ context, width, height }) => {
    context.fillStyle = "#505050";
    context.fillRect(0, 0, width, height);

    points.forEach(([u, v]) => {
      //creating the circles
      const x = u * width;
      const y = v * height;

      context.beginPath();
      context.arc(x, y, width / 5, 0, 2 * Math.PI, false);
      context.strokeStyle = "red";
      context.stroke();

      context.beginPath();
      context.arc(x * 1.5, y, width / 5, 0, 2 * Math.PI, false);
      context.strokeStyle = "crimson";
      context.stroke();

      context.beginPath();
      context.arc(x * 0.5, y, width / 5, 0, 2 * Math.PI, false);
      context.strokeStyle = "orange";
      context.stroke();
    });
  };
};

const Sketch = () => {
  //   const ref = createRef();
  const ref = useRef();

  useEffect(() => {
    settings.canvas = ref.current;
    canvasSketch(sketch, settings);
  }, [ref]);

  return (
    <>
      <StyledCanvas ref={ref} />
    </>
  );
};

const StyledCanvas = styled.canvas`
  border: 3px solid white;
`;

export default Sketch;
