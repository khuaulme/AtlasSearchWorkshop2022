import React, { useState, useEffect, useRef } from "react";
import searchIcon from "../../images/search-icon.svg";

import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true); // a mutable variable that will not affect state - and won't trigger a re-render

  useEffect(() => {
    // to skip initial render in useEffect
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="searchicon" />
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(event) => setState(event.target.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
