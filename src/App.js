import React from "react";
//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";
import Home from "./Components/Home";
import FormElement from "./Components/FormElement";
import Gallery from "./Components/Gallery";

function App() {
  const mainphotos = [
    {
      name: "p2",
      url:
        "http://www.statuscreation.com/wp-content/uploads/2020/08/banner1.jpg",
    },
    {
      name: "p3",
      url:
        "http://www.statuscreation.com/wp-content/uploads/2020/08/banner2.jpg",
    },
    {
      name: "p4",
      url:
        "http://www.statuscreation.com/wp-content/uploads/2020/08/banner3.jpg",
    },
    {
      name: "p5",
      url: "http://www.statuscreation.com/wp-content/uploads/2020/07/a41.jpg",
    },
  ];

  const kioskphotos = [
    {
      name: "p2",
      url:
        "http://www.statuscreation.com/wp-content/uploads/2020/08/banner4-768x994.jpg",
    },
    {
      name: "p3",
      url:
        "http://www.statuscreation.com/wp-content/uploads/2020/08/car2-768x994.jpg",
    },
    {
      name: "p4",
      url:
        "http://www.statuscreation.com/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-01-at-15.30.29-1-768x996.jpeg",
    },
    {
      name: "p5",
      url:
        "http://www.statuscreation.com/wp-content/uploads/2020/08/banner3.jpg",
    },
  ];

  return (
    <Router>
      <div className="main-content">
        <Navbar />
        <Route
          exact
          path="/"
          component={() => <Carousel photos={mainphotos} />}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/orient-website" component={Home} />

        <Route exact path="/contact" component={FormElement} />
        <Route exact path="/gallery" component={Gallery} />

        <Route exact path="/" component={Footer} />
        <Route exact path="/orient-website" component={Footer} />

        <Route exact path="/contact" component={Footer} />
      </div>
    </Router>
  );
}

export default App;
