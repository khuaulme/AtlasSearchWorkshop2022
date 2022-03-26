//import "./App.css";
import { GlobalStyle } from "./GlobalStyle";

import Header from "./components/header/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <GlobalStyle />
    </div>
  );
}

export default App;
