import React from 'react';
import Phone from '../images/phone-icon.png';
import Mail from '../images/mail-icon.png';
import '../App.css';

export default class Contact extends React.Component {
  render() {
    const {img, phone, name, mail} = this.props;

    return (
      <div className="contact-card">
        <img src={ img } alt='Dog'/>
        <h3>{name}</h3>
        <div className="info-group">
            <img src={ Phone } alt='Phone-Icon' />
            <p>{phone}</p>
        </div>
        <div className="info-group">
            <img src={ Mail } alt='Mail-Icon' />
            <p>{mail}</p>
        </div>
      </div>
    );
  }
}