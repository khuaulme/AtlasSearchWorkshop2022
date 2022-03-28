import React, { useState, useEffect, useRef } from "react";
import searchIcon from "../../images/search-icon.svg";
import AutoSuggestions from "../AutoSuggestions";

import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true); // a mutable variable that will not affect state - and won't trigger a re-render
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const TITLES_ENDPOINT =
    "https://us-east-1.aws.data.mongodb-api.com/app/netflixclone-xwaaq/endpoint/movieTitles";

  const fetchAutocompleteTitles = async (searchTerm) => {
    let endpoint = TITLES_ENDPOINT;
    if (searchTerm) {
      endpoint = TITLES_ENDPOINT + `?arg=${searchTerm}`;
    }
    try {
      let names = await (await fetch(endpoint)).json();
      setSuggestions(names);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // to skip initial render in useEffect
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    // BUILD OUT AUTOCOMPLETE TERMS
    if (searchTerm !== "" && searchTerm.length > 3) {
      fetchAutocompleteTitles(searchTerm);
      if (suggestions.length !== 0) {
        setShowSuggestions(true);
        return;
      }
      setShowSuggestions(false);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, setSearchTerm, state]);

  console.log("SUGGESTIONS: ", suggestions);

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
        {showSuggestions && (
          <AutoSuggestions
            items={suggestions}
            showSuggestions={showSuggestions}
            setSuggestions={setSuggestions}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          />
        )}
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
