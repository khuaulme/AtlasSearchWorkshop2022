import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5px;
  position: relative;
  border-radius: 10px;
  background-color: #48515b;
  margin-bottom: 30px;
  max-height: 700px;
  overflow: auto;
  text-align: center;
  transition: all 0.4s ease-in-out;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 200;
  :hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 200px 50px darkgreen;
    box-shadow: 0px 0px 200px 50px rgba(6, 22, 33, 0.7);
  }
`;

export const Content = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 200;

  h2 {
    font-weight: 400;
    color: #7fff00;
  }
  h3 {
    font-weight: 400;
    color: white;
  }

  h4 {
    font-weight: 200;
  }
`;

export const ScoreBadge = styled.div`
  /* position: absolute; */
  background: white;
  padding: 6px;
  color: Crimson;
  font-size: 30px;
  bottom: 0px;
  right: 10px;
  border-radius: 20px;
  height: 40px;
  width: full;
  align: center;
  border: 3px solid black;
  shadow: 
  z-index: 10;
  transition: all 0.4s ease-in-out;
  :hover {
    transform: scale(1.3);
    box-shadow: 0px 0px 200px 50px green;
    box-shadow: 0px 0px 200px 50px rgba(6, 22, 33, 0.7);
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  /* :hover {
    opacity: 0.8;
  } */

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
