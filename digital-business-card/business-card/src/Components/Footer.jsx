import React from 'react';
import './styles/footer.css'
import facebook from '../icons/Facebook Icon.png'
import instagram from '../icons/Instagram Icon.png'
import github from '../icons/GitHub Icon .png'
import Linkedin from '../icons/Linkedin Icon.png'

export default class Footer extends React.Component {
  render() {
    return (
      <div id="social">
        <a href="https://www.linkedin.com/in/brunodisliler/" target="__blank">
          <img src={Linkedin} alt="linkedin" width='40px' id='twitter'/>
        </a>

        <a href="https://pt-br.facebook.com/bruno.desouzadisliler" target="__blank">
          <img src={facebook} alt="facebook" width='40px' id='facebook'/>
        </a>

        <a href="https://www.instagram.com/brunodisliler/" target="__blank">
          <img src={instagram} alt="instagram" width='40px' id='instagram' />
        </a>

        <a href="https://github.com/BrunoDisliler" target="__blank">
          <img src={github} alt="github" width='40px' id='github'/>
        </a>
      </div>
    );
  }
}