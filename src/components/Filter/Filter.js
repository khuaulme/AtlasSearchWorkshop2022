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
  sliderValue,
  setSliderValue,
  setSubmitted,
}) => {
  return (
    <div id="filter">
      <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
      <MovieCalendar
        dateStart={dateStart}
        dateEnd={dateEnd}
        setDateStart={setDateStart}
        setDateEnd={setDateEnd}
      />
      <Selector genre={genre} setGenre={setGenre} />
      <button
        onClick={() => {
          console.log("CLICKING BUTTON");
          setSubmitted(true);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Filter;
