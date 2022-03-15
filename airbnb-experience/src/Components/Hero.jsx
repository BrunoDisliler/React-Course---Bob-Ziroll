import React from 'react';
import '../App.css';
import Group from '../images/Group 77.png';

export default class Hero extends React.Component {
  render() {
    return (
      <section className='hero'>
        <img src={Group} alt="Group Photos" id='group-img'/>
        <h1 id='h1-text'>Online Experiences</h1>
        <p id='p-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </section>
    );
  }
}