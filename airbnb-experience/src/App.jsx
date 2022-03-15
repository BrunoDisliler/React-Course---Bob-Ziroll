import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

export default class App extends React.Component {
  render() {
    return (
      <div id='nav-bar'>
        <Navbar />
        <Hero />
      </div>
    );
  }
}
