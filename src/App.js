import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Exper from "./components/Experience2/Experience2";
import Expere from "./components/Experience3/Experience3";
import Experi from "./components/Experience4/Experience4";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Testimonial />
      <br></br>
      <br></br>
      <br></br>
      <div id='experience' className="techenical" style={{ color: darkMode ? "white" : "" }}>Techenical</div>
      <div className="tech">Skills</div>
      <Experience />
      <Exper />
      <Expere />
      <div id='experience4' className="techenical2" style={{ color: darkMode ? "white" : "" }}>Tools I</div>
      <div className="tech2">Used</div>
      <Experi />
      <Works />
      {/* <Portfolio /> */}
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
