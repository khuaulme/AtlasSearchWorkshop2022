import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styled from "styled-components";

const MovieCalendar = ({ dateStart, dateEnd, setDateStart, setDateEnd }) => {
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
      <h2>{dateStart.toISOString().substring(0, 10)}</h2>
      <h2>{(dateStart.getMonth() + 1).toString()}</h2>
      <h2>{dateStart.getFullYear().toString()}</h2>
      <h2>{dateStart.toDateString()}</h2>
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
    color: black;
    font-size: 1.5rem;
  
    margin: 5px;
    width:100%
    background-color: transparent;
    border-bottom: 2px solid #e3b924;
    &:focus {
      outline: none;
    }
  }
`;
