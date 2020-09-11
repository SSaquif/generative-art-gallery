import React, { useState, useEffect, useRef } from "react";
import Sketch from "./Sketch";
import styled from "styled-components";
import artDirectory from "../Art-Directory/artDirectory";

const App = () => {
  const [sketch, setSketch] = useState(artDirectory[0]);
  const [sketchIndex, setSketchIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const lt = "<";
  const gt = ">";

  const handlePrev = () => {
    if (sketchIndex) {
      setSketch(artDirectory[sketchIndex - 1]);
      setSketchIndex(sketchIndex - 1);
    }
  };

  const handleNext = () => {
    if (sketchIndex < artDirectory.length - 1) {
      setSketch(artDirectory[sketchIndex + 1]);
      setSketchIndex(sketchIndex + 1);
    }
  };

  const handleKeyDown = (ev) => {
    if (ev.key === "ArrowLeft") {
      prevRef.current.focus();
      handlePrev();
    } else if (ev.key === "ArrowRight") {
      nextRef.current.focus();
      handleNext();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sketchIndex]);

  return (
    <>
      <SketchContainer>
        <PrevButton ref={prevRef} onClick={handlePrev}>
          {lt}
        </PrevButton>
        <Sketch sketch={sketch} />
        <NextButton ref={nextRef} onClick={handleNext}>
          {gt}
        </NextButton>
      </SketchContainer>
    </>
  );
};

const SketchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const PrevButton = styled.button`
  display: inline-block;
  border: none;
  background-color: black;
  color: white;
  font-size: 5em;
  opacity: 0.3;
  padding: 1.5%;
  margin-right: 2%;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
    opacity: 1;
  }
`;

const NextButton = styled.button`
  display: inline-block;
  border: none;
  background-color: black;
  color: white;
  font-size: 5em;
  opacity: 0.3;
  padding: 1.5%;
  margin-left: 2%;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
    opacity: 1;
  }
`;
export default App;
