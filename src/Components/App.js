import React from "react";
import Sketch from "./Sketch";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <SketchContainer>
        <Sketch />
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

export default App;
