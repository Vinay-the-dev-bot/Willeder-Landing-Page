import "./App.css";
import NavBar from "./Components/NavBar";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Animation from "./Components/Animation";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <NavBar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Animation />
      <Footer />
    </div>
  );
}

export default App;
