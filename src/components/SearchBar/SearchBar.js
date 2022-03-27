import React, { useState, useEffect, useRef } from "react";

import { SearchIcon } from "@heroicons/react/outline";

import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <Wrapper>
      <Content>
        <SearchIcon />
        <input type="text" placeholder="Search movies" />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
