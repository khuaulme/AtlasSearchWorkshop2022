import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

import styled from "styled-components";
const Styles = styled.div`
  color: white;
  font-family: "Lexend Deca", sans-serif;
  background: #061621;
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
    width: 100%;
    margin: 5px;
    background-color: transparent;
    border-bottom: 2px solid #e3b924;
    &:focus {
      outline: none;
    }
  }
`;
const CodeBlock = styled.div`
  margin: 8px;
  border: 2px solid #40158a;
`;

const MovieCalendar = ({
  dateStart,
  dateEnd,
  setDateStart,
  setDateEnd,
  showCodeBlock,
}) => {
  let calendarObject = {
    range: {
      path: "released",
      gte: new Date(dateStart),
      lte: new Date(dateEnd),
    },
  };

  const calendarString = JSON.stringify(calendarObject, null, 2);
  return (
    <div>
      <Styles>
        <h2>Release Date Start</h2>
        <DatePicker
          selected={dateStart}
          onChange={(date) => setDateStart(date)}
          dateFormat="MM/dd/yyyy"
          maxDate={new Date()}
          showYearDropdown
          scrollableYearDropdown
        />

        <h2>Release Date End</h2>
        <DatePicker
          selected={dateEnd}
          dateFormat="MM/dd/yyyy"
          maxDate={new Date()}
          onChange={(date) => setDateEnd(date)}
          showYearDropdown
          scrollableYearDropdown
        />
      </Styles>
      {showCodeBlock && (
        <CodeBlock>
          {" "}
          <SyntaxHighlighter language="javascript" style={nightOwl}>
            {calendarString}
          </SyntaxHighlighter>
        </CodeBlock>
      )}
    </div>
  );
};

export default MovieCalendar;
