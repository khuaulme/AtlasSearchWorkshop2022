import React from "react";
import LOGO from "../../images/logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import { Wrapper, Content, LogoMDBFlix, InputForm } from "./Header.styles";

const Header = ({ setSearchTerm }) => (
  <Wrapper>
    <Content>
      <LogoMDBFlix src={LOGO} alt="mdb-logo" />
      <InputForm>
        <SearchBar setSearchTerm={setSearchTerm} />
      </InputForm>
    </Content>
  </Wrapper>
);

export default Header;
