import React, { useState, useEffect } from "react";

// Components
import Header from "./Header";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";

import Filter from "./Filter/Filter";

// NoImage

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(true);
  const [dateStart, setDateStart] = useState(new Date(1970, 12, 1));
  const [dateEnd, setDateEnd] = useState(new Date());
  const [genre, setGenre] = useState({ value: "", label: "" });
  const [sliderValue, setSliderValue] = useState(0);

  const MOVIES_ENDPOINT =
    "https://us-east-1.aws.data.mongodb-api.com/app/netflixclone-xwaaq/endpoint/movies";

  const MOVIES_ENDPOINT_ADVANCED =
    "https://us-east-1.aws.data.mongodb-api.com/app/netflixclone-xwaaq/endpoint/getMoviesAdvanced";

  const fetchMovies = async (searchTerm) => {
    console.log("HITTING FETCH MOVIES API");
    console.log("SEARCHTERM: ", searchTerm);

    let endpoint;
    try {
      if (showFilter) {
        endpoint =
          MOVIES_ENDPOINT_ADVANCED +
          `?arg=${searchTerm}&start=${dateStart}&end=${dateEnd}&genre=${genre.value}&rating=${sliderValue}`;
      } else {
        endpoint = MOVIES_ENDPOINT + "?arg=" + searchTerm;
      }

      console.log("CALLING: ", endpoint);

      const returnedMovies = await (await fetch(endpoint)).json();

      setMovies(returnedMovies);
      console.log(returnedMovies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchTerm.length < 3) {
      return;
    }
    fetchMovies(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  console.log("HAVE MY MOVIES UPDATED?");
  if (movies.length > 0) console.log("YES!!");

  return (
    <>
      {" "}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
        setMovies={setMovies}
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
          />
        )}

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
      </div>{" "}
    </>
  );
};

export default Home;
