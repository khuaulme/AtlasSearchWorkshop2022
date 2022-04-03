import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Header from "./Header";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";
import Filter from "./Filter/Filter";

const Home = () => {
  // INSERT YOUR CREATED MOVIE ENDPOINTS
  const MOVIES_ENDPOINT =
    "https://us-east-1.aws.data.mongodb-api.com/app/netflixclone-xwaaq/endpoint/movies";

  const MOVIES_ENDPOINT_FILTERED =
    "https://us-east-1.aws.data.mongodb-api.com/app/netflixclone-xwaaq/endpoint/moviesFiltered";

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(true);
  const [showCodeBlock, setShowCodeBlock] = useState(false);
  const [dateStart, setDateStart] = useState(new Date(1970, 12, 1));
  const [dateEnd, setDateEnd] = useState(new Date(2022, 1, 4));
  const [genre, setGenre] = useState({ value: "", label: "" });
  const [sliderValue, setSliderValue] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showNeedEndpointMessage, setShowNeedEndpointMessage] = useState(false);

  const fetchMovies = async (searchTerm) => {
    console.log("HITTING FETCH MOVIES API");
    console.log("SEARCHTERM: ", searchTerm);

    try {
      if (showFilter) {
        let data = {
          searchTerm: searchTerm,
          start: dateStart,
          end: dateEnd,
          genre: genre.value,
          rating: sliderValue,
        };

        axios.post(MOVIES_ENDPOINT_FILTERED, data).then((res) => {
          setMovies(res.data);
        });
      } else {
        const endpoint = MOVIES_ENDPOINT + "?arg=" + searchTerm;
        const returnedMovies = await (await fetch(endpoint)).json();
        setMovies(returnedMovies);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!submitted) return;
    if (MOVIES_ENDPOINT === "" && MOVIES_ENDPOINT_FILTERED === "") {
      setShowNeedEndpointMessage(true);
      return;
    }

    fetchMovies(searchTerm);
    setShowSuggestions(false);
    setSubmitted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted]);

  return (
    <>
      {" "}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
        showCodeBlock={showCodeBlock}
        setShowCodeBlock={setShowCodeBlock}
        setMovies={setMovies}
        setSubmitted={setSubmitted}
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
      />
      <div className="container">
        {showFilter && (
          <Filter
            dateStart={dateStart}
            dateEnd={dateEnd}
            setDateStart={setDateStart}
            setDateEnd={setDateEnd}
            genre={genre}
            setGenre={setGenre}
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
            setSubmitted={setSubmitted}
            searchTerm={searchTerm}
            showCodeBlock={showCodeBlock}
          />
        )}

        {showNeedEndpointMessage ? (
          <div className="needEndpoint">Build Endpoint S'il Vous Plaît</div>
        ) : (
          <Grid header={searchTerm ? null : "Movie Search Results"}>
            {movies.map((movie) => (
              <Thumb
                key={movie._id}
                movie={movie}
                clickable
                movieID={movie._id}
                image={
                  movie.poster ? movie.poster : "http://bit.ly/AtlasMoviePoster"
                }
              ></Thumb>
            ))}
          </Grid>
        )}
      </div>{" "}
    </>
  );
};

export default Home;

// const MOVIES_ENDPOINT =
//   "https://us-east-1.aws.data.mongodb-api.com/app/netflixclone-xwaaq/endpoint/movies";

// const MOVIES_ENDPOINT_FILTERED =
//   "https://us-east-1.aws.data.mongodb-api.com/app/netflixclone-xwaaq/endpoint/moviesFiltered";

// const MOVIES_ENDPOINT_ADVANCED =
//   "https://us-east-1.aws.data.mongodb-api.com/app/netflixclone-xwaaq/endpoint/getMoviesAdvanced";

// endpoint =
//   MOVIES_ENDPOINT_ADVANCED +
//   `?arg=${searchTerm}&start=${dateStart}&end=${dateEnd}&genre=${genre.value}&rating=${sliderValue}`;
