import React from "react";
import Katie from '../images/image 12.png';
import Info from '../images/Group 65.png';
import SoldOut from '../images/Group 80.png';

export default class Card extends React.Component {
  render() {
    return (
      <div id="div-info-1">
        <img src={Katie} alt="Katie" id="Katie"/>
        <img src={Info} alt="Info" id="Info"/>
        <img src={SoldOut} alt="SoldOut" id="SoldOut"/>
      </div>
    );
  }
}