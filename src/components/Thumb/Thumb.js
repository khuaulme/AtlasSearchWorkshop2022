import React from "react";

import { Wrapper, Content, Image, ScoreBadge } from "./Thumb.styles";

const Thumb = ({ movie, image, movieID, clickable }) => {
  const score = movie.score.toString().slice(0, 5);
  const plotWithHighlights = buildPlotHighlights(movie.highlights);
  const rating = movie.imdb.rating;
  return (
    <Wrapper>
      <Content>
        <h2>{movie.title}</h2>
        <Image src={image} alt="movie-thumb" />
        <h3>Year: {movie.year}</h3>
        <h3>Rating: {rating}</h3>

        <h4 dangerouslySetInnerHTML={{ __html: plotWithHighlights }}></h4>
      </Content>
      <ScoreBadge>Score: {score}</ScoreBadge>
    </Wrapper>
  );
};

function buildPlotHighlights(highlights) {
  let highlightString = "";

  highlights.forEach((highlight) => {
    console.log(highlight.texts);
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
