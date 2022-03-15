import React from 'react';
import foto from '../images/foto-perfil.png'
import './styles/info.css'

export default class Info extends React.Component {
  render() {
    return (
      <div className='div-info'>
        <img src={foto} width='250px' alt="Foto Bruno" id='img'></img>
        <h2 id='name'>Bruno Disliler</h2>
        <h3 id='cargo'>Frontend Developer</h3>
        <h5 id='email'>bruno_disliler@outlook.com</h5>
        <a href="mailto:bruno_disliler@outlook.com" target="__blank">
          <button type="button" id='btn-email'>Email</button>
        </a>
        <a href="https://www.linkedin.com/in/brunodisliler/" target="__blank">
          <button type='button' id='btn-linkedin'>Linkedin</button>
        </a>
      </div>
    );
  }
}