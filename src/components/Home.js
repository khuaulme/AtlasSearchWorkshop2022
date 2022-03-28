import React, { useState, useEffect } from "react";

// Components
import Header from "./Header";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";

import Filter from "./Filter/Filter";

// NoImage

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(true);

  const MOVIES_ENDPOINT =
    "https://us-east-1.aws.data.mongodb-api.com/app/netflixclone-xwaaq/endpoint/movies";

  const fetchMovies = async (searchTerm) => {
    console.log("HITTING FETCH MOVIES API");
    console.log("SEARCHTERM: ", searchTerm);
    try {
      setError(false);
      setLoading(true);

      const endpoint = MOVIES_ENDPOINT + `?arg=${searchTerm}`;

      const returnedMovies = await (await fetch(endpoint)).json();

      setMovies(returnedMovies);
      console.log(returnedMovies);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    // setMovies([]);
    // setLoading(false);
    // setError(false);
    fetchMovies(searchTerm);
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
      />
      <div className="container">
        {/* {searchTerm === "" && <HeroImage />} */}
        {showFilter && <Filter />}

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
