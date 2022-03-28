//import "./App.css";
import React, { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";

import Home from "./components/Home";
import Header from "./components/Header/Header";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(true);
  return (
    <div className="App">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
      />
      <Home
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showFilter={showFilter}
      />

      {/* <GlobalStyle /> */}
    </div>
  );
}

export default App;
