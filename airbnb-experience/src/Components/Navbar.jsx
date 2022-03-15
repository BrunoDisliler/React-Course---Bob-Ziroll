import React from 'react';
import '../App.css';
import Airbnb from '../images/airbnb 1.png'

export default class App extends React.Component {
  render() {
    return (
      <nav id='nav-bar'>
        <img src={Airbnb} width="80px" alt="Airbnb Logo" id='airbnb-logo' />
      </nav>
    );
  }
}
