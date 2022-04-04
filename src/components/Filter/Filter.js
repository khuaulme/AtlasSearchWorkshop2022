import React from "react";
import "./Filter.css";

import Selector from "../Selector";
import MovieCalendar from "../MovieCalendar";
import Slider from "../Slider";

const Filter = ({
  genre,
  setGenre,
  dateStart,
  dateEnd,
  setDateStart,
  setDateEnd,
  rating,
  setRating,
  setSubmitted,
  searchTerm,
}) => {
  return (
    <div id="filter">
      <Slider rating={rating} setRating={setRating} />
      <MovieCalendar
        dateStart={dateStart}
        dateEnd={dateEnd}
        setDateStart={setDateStart}
        setDateEnd={setDateEnd}
      />
      <Selector genre={genre} setGenre={setGenre} />
      <button
        onClick={() => {
          setSubmitted(true);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Filter;
