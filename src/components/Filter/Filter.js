import React from "react";
import "./Filter.css";
import Selector from "../Selector";
import MovieCalendar from "../MovieCalendar";
import Slider from "../Slider";

const Filter = () => {
  return (
    <div id="filter">
      <Slider />
      <MovieCalendar />
      <Selector />
    </div>
  );
};

export default Filter;
