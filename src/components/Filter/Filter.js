import React from "react";
import "./Filter.css";

import Selector from "../Selector";
import MovieCalendar from "../MovieCalendar";
import Slider from "../Slider";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

const CodeBlock = styled.div`
  margin: 8px;
  border: 2px solid #40158a;
`;

const Filter = ({
  genre,
  setGenre,
  dateStart,
  dateEnd,
  setDateStart,
  setDateEnd,
  sliderValue,
  setSliderValue,
  setSubmitted,
  searchTerm,
  showCodeBlock,
  setShowCodeBlock,
}) => {
  let searchObject = {
    text: {
      query: searchTerm,
      path: ["title", "plot", "fullplot"],
    },
  };
  let searchString = JSON.stringify(searchObject, null, 2);
  return (
    <div id="filter">
      {showCodeBlock ? (
        <button
          id="code-block"
          onClick={() => {
            setShowCodeBlock(!showCodeBlock);
          }}
        >
          Hide Query Code
        </button>
      ) : (
        <button
          id="code-block"
          onClick={() => {
            setShowCodeBlock(!showCodeBlock);
          }}
        >
          Show Query Code
        </button>
      )}
      {showCodeBlock && (
        <>
          <h2>SEARCH SUB-QUERIES</h2>
          <CodeBlock>
            <SyntaxHighlighter language="javascript" style={nightOwl}>
              {searchString}
            </SyntaxHighlighter>
          </CodeBlock>
        </>
      )}
      <Slider
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        showCodeBlock={showCodeBlock}
      />
      <MovieCalendar
        dateStart={dateStart}
        dateEnd={dateEnd}
        setDateStart={setDateStart}
        setDateEnd={setDateEnd}
        showCodeBlock={showCodeBlock}
      />
      <Selector
        genre={genre}
        setGenre={setGenre}
        showCodeBlock={showCodeBlock}
      />
      <button
        onClick={() => {
          console.log("CLICKING BUTTON");
          setSubmitted(true);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Filter;
