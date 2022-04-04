import React from "react";
import styled from "styled-components";
const sliderThumbStyles = (props) => `
width:25px;
height:25px;
background:Crimson;
cursor:pointer;
outline:5px solid #333;
`;

const Slider = ({ rating, setRating }) => {
  return (
    <div>
      <Styles>
        <h2 className="value">IMDB Rating: {rating}</h2>
        <input
          className="slider"
          type="range"
          min={0}
          max={10}
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        />
      </Styles>
    </div>
  );
};

export default Slider;

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
