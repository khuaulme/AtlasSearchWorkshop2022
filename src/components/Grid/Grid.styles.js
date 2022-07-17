import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: unset;
  margin: 0 auto;
  padding-inline: 20px;

  flex-grow: 1;

  h1 {
    color: var(--lightGray);
    font-family: "Lexend Deca", sans-serif;
    font-weight: 200;
    margin-block-end: 15px;
  }

  @media (min-width: 900px) {
    max-width: 70%;
    padding-inline: 0px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;
  justify-items: center;

  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
