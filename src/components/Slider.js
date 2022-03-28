import React, { useState } from "react";
import styled from "styled-components";
const sliderThumbStyles = (props) => `
width:25px;
height:25px;
background:red;
cursor:pointer;
outline:5px solid #333;

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

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
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
  );
};

export default Slider;
