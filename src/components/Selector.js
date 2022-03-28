import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 10px;

  .genre {
    width: 100%;
    /* padding-left: 40px; */
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

const movieOptions = [
  { value: "All", label: "All" },
  { value: "Drama", label: "🎭   Drama" },
  { value: "Comedy", label: "😂   Comedy" },
  { value: "Romance", label: "❤️   Romance" },
  { value: "Action", label: "💨   Action" },
  { value: "Thriller", label: "😱   Thriller" },
  { value: "Horror", label: "🧟   Horror" },
  { value: "Musical", label: "🎶   Musical" },
];

const Selector = () => {
  const [genre, setGenre] = useState("");
  return (
    <Wrapper>
      <h1>Film Genre</h1>
      <div className="genre">
        <Select
          components={makeAnimated()}
          onChange={setGenre}
          options={movieOptions}
          placeholder="Film Category"
        />
      </div>
      <h1>{genre.value}</h1>
    </Wrapper>
  );
};

export default Selector;
