import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styled from "styled-components";

const Styles = styled.div`
  color: white;
  font-family: "Lexend Deca", sans-serif;
  font-size: 1rem;
  font-weight: lighter;
  margin: 2rem, 2rem, 2rem, 2rem;

  h2 {
    color: var(--medGray);
    font-family: "Lexend Deca", sans-serif;
    font-weight: 200;
  }

  input {
    text-align: center;
    color: white;
    font-size: 1.5rem;
    border: none;
    margin: 5px;
    background-color: transparent;
    border-bottom: 2px solid #e3b924;
    &:focus {
      outline: none;
    }
  }
`;

const MovieCalendar = () => {
  const [dateStart, setDateStart] = useState(new Date(1920, 12, 1));
  const [dateEnd, setDateEnd] = useState(new Date());

  return (
    <Styles>
      <h2>Release Date Start</h2>
      <DatePicker
        selected={dateStart}
        onChange={(date) => setDateStart(date)}
        dateFormat="dd/MM/yyyy"
        maxDate={new Date()}
        showYearDropdown
        scrollableYearDropdown
      />
      {/* <h2>{dateStart.toISOString().substring(0, 10)}</h2> */}
      {/* <h2>{dateStart.getMonth().toString()}</h2> */}
      <h2>Release Date End</h2>
      <DatePicker
        selected={dateEnd}
        dateFormat="dd/MM/yyyy"
        maxDate={new Date()}
        onChange={(date) => setDateEnd(date)}
        showYearDropdown
        scrollableYearDropdown
      />
    </Styles>
  );
};

export default MovieCalendar;
