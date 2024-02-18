import "./App.css";
import NavBar from "./Components/NavBar";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";

function App() {
  return (
    <div className="App">
      <div id="background"></div>
      <NavBar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  );
}

export default App;
