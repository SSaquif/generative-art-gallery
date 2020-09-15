import React, { useState, useEffect, useRef } from "react";
import Sketch from "./Sketch";
import styled from "styled-components";
import artDirectory from "../Art-Directory/artDirectory";

const App = () => {
  const [sketch, setSketch] = useState(artDirectory[0]);
  const [sketchIndex, setSketchIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevRefMobile = useRef(null);
  const nextRefMobile = useRef(null);

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
      prevRefMobile.current.focus();
      handlePrev();
    } else if (ev.key === "ArrowRight") {
      nextRef.current.focus();
      nextRefMobile.current.focus();
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
        <PrevButtonWideScreen ref={prevRef} onClick={handlePrev}>
          {lt}
        </PrevButtonWideScreen>
        <Sketch sketch={sketch} />
        <MobileButtonWrapper>
          <PrevButtonMobile ref={prevRefMobile} onClick={handlePrev}>
            {lt}
          </PrevButtonMobile>
          <NextButtonMobile ref={nextRefMobile} onClick={handleNext}>
            {gt}
          </NextButtonMobile>
        </MobileButtonWrapper>
        <NextButtonWideScreen ref={nextRef} onClick={handleNext}>
          {gt}
        </NextButtonWideScreen>
      </SketchContainer>
    </>
  );
};

const SketchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 812px) {
    flex-direction: column;
  }
`;

const PrevButtonWideScreen = styled.button`
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

  @media screen and (max-width: 812px) {
    display: none;
  }
`;

const NextButtonWideScreen = styled.button`
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

  @media screen and (max-width: 812px) {
    display: none;
  }
`;

const MobileButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const PrevButtonMobile = styled.button`
  display: inline-block;
  border: none;
  background-color: black;
  color: white;
  font-size: 4em;
  opacity: 0.3;
  padding: 1.5%;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
    opacity: 1;
  }

  @media screen and (min-width: 813px) {
    display: none;
  }
`;

const NextButtonMobile = styled.button`
  display: inline-block;
  border: none;
  background-color: black;
  color: white;
  font-size: 4em;
  opacity: 0.3;
  padding: 1.5%;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
    opacity: 1;
  }

  @media screen and (min-width: 813px) {
    display: none;
  }
`;

export default App;
