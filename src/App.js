import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Navbar } from './components';
import { Header, Footer, Experience, Skills } from './containers';

import React from 'react';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <div className='bjb__body'>
          <Header />
          <div className='bjb__details'>
            <Experience />
            <Skills />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
