import React from "react";
import LOGO from "../../images/logo.svg";
import { Wrapper, Content, LogoMDBFlix } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <LogoMDBFlix src={LOGO} alt="mdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
