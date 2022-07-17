import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5px;
  position: relative;
  border-radius: 10px;
  background-color: #48515b;
  margin-bottom: 30px;
  max-width: 200px;
  max-height: 700px;
  overflow-Y: auto;
  overflow-X: hidden;
  text-align: center;
  transition: all 0.4s ease-in-out;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 200;
  :hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 200px 50px darkgreen;
    box-shadow: 0px 0px 200px 50px rgba(6, 22, 33, 0.7);
  }

  @media (min-width: 600px) {
    max-width: 400px;
  }
`;

export const Content = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 200;

  h2.card-title {
    font-weight: 400;
    color: #7fff00;
    margin-block: 10px;
  }
  h3 {
    font-weight: 400;
    color: var(--white);
    margin-block: 25px;
  }

  h4 {
    font-weight: 200;
    color: var(--white);
    line-height: 1.3;
  }
`;

export const ScoreBadge = styled.div`
  /* position: absolute; */
  background: white;
  padding: 6px;
  margin-block: 10px;
  color: Crimson;
  font-size: 20px;
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
    transform: scale(1.1);
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
