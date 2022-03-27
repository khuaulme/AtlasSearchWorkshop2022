import React, { useState, useEffect } from "react";

// Components
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";
import Spinner from "./Spinner/Spinner";
import SearchBar from "./SearchBar/SearchBar";

// NoImage

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const MOVIES_ENDPOINT =
    "https://us-east-1.aws.data.mongodb-api.com/app/netflixclone-xwaaq/endpoint/movies";

  const fetchMovies = async (searchTerm) => {
    console.log("HITTING FETCH MOVIES API");
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
    fetchMovies("Harry Potter");
  }, []);

  console.log("HAVE MY MOVIES UPDATED?");
  if (movies.length > 0) console.log("YES!!");

  return (
    <>
      {movies[0] && (
        <HeroImage
          image={movies[0].poster}
          title={movies[0].title}
          fullplot={movies[0].fullplot}
        />
      )}
      <SearchBar />
      <Grid header="Popular Movies">
        {movies.map((movie) => (
          <Thumb
            key={movie._id}
            clickable
            movieID={movie._id}
            image={
              movie.poster ? movie.poster : "http://bit.ly/AtlasMoviePoster"
            }
          ></Thumb>
        ))}
      </Grid>
      <Spinner />
    </>
  );
};

export default Home;
