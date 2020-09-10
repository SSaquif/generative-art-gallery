import React, { useState } from "react";
import Sketch from "./Sketch";
import styled from "styled-components";
import artDirectory from "../Art-Directory/artDirectory";

const App = () => {
  const [sketch, setSketch] = useState(artDirectory[0]);
  const [sketchIndex, setSketchIndex] = useState(0);

  const lt = "<";
  const gt = ">";

  const handlePrev = (ev) => {
    if (sketchIndex) {
      setSketch(artDirectory[sketchIndex - 1]);
      setSketchIndex(sketchIndex - 1);
    }
  };

  const handleNext = (ev) => {
    if (sketchIndex < artDirectory.length - 1) {
      setSketch(artDirectory[sketchIndex + 1]);
      setSketchIndex(sketchIndex + 1);
    }
  };

  return (
    <>
      <SketchContainer>
        <PrevButton onClick={handlePrev}> {lt} </PrevButton>
        <Sketch sketch={sketch} />
        <NextButton onClick={handleNext}> {gt} </NextButton>
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
`;
export default App;
