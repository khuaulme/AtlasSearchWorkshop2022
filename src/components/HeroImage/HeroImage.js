import React from "react";

import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({ title, fullplot, poster }) => {
  return (
    <Wrapper image={poster}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{fullplot}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default HeroImage;
