import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Navbar } from './components';
import { Header, Footer } from './containers';

import React from 'react';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        <Footer />
      </div>
    </div>
    // <Router>
    //   <div style={{ backgroundColor: "#22264c", height: "100vh" }}>
    //     <Navbar />
    //   </div>
    // </Router>
  );
};

export default App;
