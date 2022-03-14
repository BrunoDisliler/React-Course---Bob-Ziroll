import React from 'react';
import './styles/about.css'

export default class About extends React.Component {
  render() {
    return (
      <div id='div-about'>
        <h3 id='about-title'>About</h3>
        <p id='about-text'>
          I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep us with security and best practices, and am always looking for new things to learn.
        </p>
      </div>
    );
  }
}