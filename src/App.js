//import "./App.css";
import { GlobalStyle } from "./GlobalStyle";

import Home from "./components/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      {/* <GlobalStyle /> */}
    </div>
  );
}

export default App;
