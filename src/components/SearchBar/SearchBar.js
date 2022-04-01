import React, { useState, useEffect, useRef } from "react";
import searchIcon from "../../images/search-icon.svg";
import AutoSuggestions from "../AutoSuggestions";

import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ searchTerm, setSearchTerm, setMovies }) => {
  const initial = useRef(true); // a mutable variable that will not affect state - and won't trigger a re-render
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // const TITLES_ENDPOINT =
  //   "https://us-east-1.aws.data.mongodb-api.com/app/netflixclone-xwaaq/endpoint/movieTitles";

  const TITLES_ENDPOINT = "";

  const fetchAutocompleteTitles = async (searchTerm) => {
    if (TITLES_ENDPOINT === "") {
      console.log("BUILD AUTOCOMPLETE ENDPOINT");
      return;
    }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CLICK!");
    setShowSuggestions(false);
  };

  useEffect(() => {
    // to skip initial render in useEffect
    if (initial.current) {
      initial.current = false;
      return;
    }
    if (searchTerm === "" || searchTerm.length < 3) {
      setMovies([]);
      return;
    }

    if (submitted) {
      console.log("CLICK!");
      setShowSuggestions(false);
    }
    // BUILD OUT AUTOCOMPLETE TERMS

    fetchAutocompleteTitles(searchTerm);
    if (suggestions.length !== 0) {
      setShowSuggestions(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  console.log("SUGGESTIONS: ", suggestions);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="searchicon" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            onChange={(event) => setSearchTerm(event.target.value)}
            value={searchTerm}
          />
        </form>

        {showSuggestions && (
          <AutoSuggestions
            items={suggestions}
            setShowSuggestions={setShowSuggestions}
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
