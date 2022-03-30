import React from "react";
import "./Filter.css";
import Selector from "../Selector";
import MovieCalendar from "../MovieCalendar";
import Slider from "../Slider";

const Filter = ({ dateStart, dateEnd, setDateStart, setDateEnd }) => {
  return (
    <div id="filter">
      <Slider />
      <MovieCalendar
        dateStart={dateStart}
        dateEnd={dateEnd}
        setDateStart={setDateStart}
        setDateEnd={setDateEnd}
      />
      <Selector />
    </div>
  );
};

export default Filter;
