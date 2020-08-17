import React, { Component } from "react";
import "./App.css";
import "./components/navbar.jsx";
import "../node_modules/hover.css/css/hover.css";
import "@fortawesome/fontawesome-free/css/all.css";
import my_logo from "./content/logo.png";
import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Work from "./components/work.jsx";
import Contact from "./components/contact.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar my_logo={my_logo} />
          <section className="home">
            {/* <h1>
              Hi. My name is Brendan Bishop.
              <br />I can make websites and stuff.
            </h1> */}
            <h1 id="home-text">
              Website is under construction.
              <br />
              :)
            </h1>
            <button id="to-top">
              <i className="fa fa-arrow-circle-up" />
            </button>
          </section>
          <About />
          <Work />
          <Contact />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
