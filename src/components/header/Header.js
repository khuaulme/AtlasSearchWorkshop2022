import React from "react";
import LOGO from "../../images/logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import { Wrapper, Content, LogoMDBFlix, InputForm } from "./Header.styles";

const Header = ({ setSearchTerm, showFilter, setShowFilter }) => (
  <Wrapper>
    <Content>
      <LogoMDBFlix
        src={LOGO}
        alt="mdb-logo"
        onClick={() => setShowFilter(!showFilter)}
      />
      <InputForm>
        <SearchBar setSearchTerm={setSearchTerm} />
      </InputForm>
    </Content>
  </Wrapper>
);

export default Header;
