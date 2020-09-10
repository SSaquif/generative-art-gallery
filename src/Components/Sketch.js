import React, { useEffect, createRef, useRef } from "react";
import canvasSketch from "canvas-sketch";
import styled from "styled-components";

const settings = {
  dimensions: [2048, 2048],
};

const Sketch = ({ sketch }) => {
  // const ref = createRef();
  const ref = useRef();

  useEffect(() => {
    settings.canvas = ref.current;
    canvasSketch(sketch, settings);
  }, [ref, sketch]);

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
