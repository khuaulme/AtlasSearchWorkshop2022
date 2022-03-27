//import "./App.css";
import React, { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";

import Home from "./components/Home";
import Header from "./components/Header/Header";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* <GlobalStyle /> */}
    </div>
  );
}

export default App;
