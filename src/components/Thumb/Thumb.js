import React from "react";

import { Wrapper, Content, Image, ScoreBadge } from "./Thumb.styles";

const Thumb = ({ movie, image, movieID, clickable }) => {
  const score = movie.score.toString().slice(0, 5);
  const plotWithHighlights = buildPlotHighlights(movie.highlights);
  const rating = movie.imdb.rating;
  const releaseDate = movie.released;
  let releaseString = "";
  if (typeof releaseDate === "string") {
    console.log("STRING!");
    releaseString = releaseDate.slice(0, 10);
  }

  let genreString = "";
  if (movie.genres) {
    genreString = movie.genres.join(", ");
  }

  return (
    <Wrapper>
      <Content>
        <h2>{movie.title}</h2>
        <Image src={image} alt="movie-thumb" />
        <ScoreBadge>Score: {score}</ScoreBadge>
        <h3>Year: {movie.year}</h3>
        <h3>Rating: {rating}</h3>
        {releaseString !== "" && <h4>RELEASE DATE: {releaseString}</h4>}
        <h4 style={{ color: "red" }}>{genreString}</h4>
        <h4 dangerouslySetInnerHTML={{ __html: plotWithHighlights }}></h4>
      </Content>
    </Wrapper>
  );
};

function buildPlotHighlights(highlights) {
  let highlightString = "";

  highlights.forEach((highlight) => {
    let texts = highlight.texts;
    texts.forEach((text) => {
      if (text.type === "hit")
        highlightString += `<span style="color:yellow; font-weight:bold;"> ${text.value} </span>`;
      else highlightString += text.value;
    });
  });

  return highlightString;
}

export default Thumb;
