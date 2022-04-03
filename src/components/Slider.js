import React, { useState } from "react";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
const sliderThumbStyles = (props) => `
width:25px;
height:25px;
background:Crimson;
cursor:pointer;
outline:5px solid #333;
`;

const Slider = ({ sliderValue, setSliderValue, showCodeBlock }) => {
  let ratingObject = {
    range: {
      gte: sliderValue,
      lte: 10,
      path: "imdb.rating",
    },
  };

  let ratingString = JSON.stringify(ratingObject, null, 2);
  return (
    <div>
      <Styles>
        <h2 className="value">IMDB Rating: {sliderValue}</h2>
        <input
          className="slider"
          type="range"
          min={0}
          max={10}
          value={sliderValue}
          onChange={(e) => {
            setSliderValue(e.target.value);
          }}
        />
      </Styles>
      {showCodeBlock && (
        <CodeBlock>
          {" "}
          <SyntaxHighlighter language="javascript" style={nightOwl}>
            {ratingString}
          </SyntaxHighlighter>
        </CodeBlock>
      )}
    </div>
  );
};

export default Slider;

const CodeBlock = styled.div`
  margin: 8px;
  border: 2px solid #40158a;
`;
const Styles = styled.div`
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 200;
  margin: 0px;

  h2  {
    color: var(--medGray);
    font-family: "Lexend Deca", sans-serif;
    font-weight: 200;
  }

  .value {
    flex: 1;
    font-size: 2rem;
  }

  .slider {
      flex:6;
      -webkit-appearance:none;
      width:60%;
      height: 15px;
      border-radius:5px;
      background: #efefef
      outline:none;
      
      &::-webkit-slider-thumb{
        -webkit-appearance:none;
        appearance:none;
        ${(props) => sliderThumbStyles(props)}
      }
  }
`;
