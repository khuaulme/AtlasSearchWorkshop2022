import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 10px;

  .genre {
    width: 100%;

    color: black;
    font-family: "Lexend Deca", sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
  }
  h1 {
    color: var(--darkGray);
    font-family: "Lexend Deca", sans-serif;
    font-weight: 200;
  }
`;
const CodeBlock = styled.div`
  margin: 8px;
  border: 2px solid #40158a;
`;

const movieOptions = [
  { value: "", label: "All" },
  { value: "Drama", label: "🎭   Drama" },
  { value: "Comedy", label: "😂   Comedy" },
  { value: "Romance", label: "❤️   Romance" },
  { value: "Family", label: "👨‍👨‍👧‍👦   Family" },
  { value: "Action", label: "💨   Action" },
  { value: "Thriller", label: "😱   Thriller" },
  { value: "Fantasy", label: "🧚🧌   Fantasy" },
  { value: "Musical", label: "🎶   Musical" },
];

const Selector = ({ genre, setGenre, showCodeBlock }) => {
  let genreObject = {
    text: {
      query: genre.value,
      path: "genres",
    },
  };
  let genreString = JSON.stringify(genreObject, null, 2);

  return (
    <div>
      <Wrapper>
        <h1>Film Genre</h1>
        <div className="genre">
          <Select
            components={makeAnimated()}
            onChange={setGenre}
            options={movieOptions}
          />
        </div>
      </Wrapper>
      {showCodeBlock && (
        <CodeBlock>
          <SyntaxHighlighter language="javascript" style={nightOwl}>
            {genreString}
          </SyntaxHighlighter>
        </CodeBlock>
      )}
    </div>
  );
};

export default Selector;
