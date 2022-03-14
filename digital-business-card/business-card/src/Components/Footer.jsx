import React from 'react';
import './styles/footer.css'
import facebook from '../icons/Facebook Icon.png'
import instagram from '../icons/Instagram Icon.png'
import github from '../icons/GitHub Icon .png'
import twitter from '../icons/Twitter Icon.png'

export default class Footer extends React.Component {
  render() {
    return (
      <div id='social'>
        <img src={twitter} alt="twitter" width='25px' id='twitter'/>
        <img src={facebook} alt="facebook" width='25px' id='facebook'/>
        <img src={instagram} alt="instagram" width='25px' id='instagram' />
        <img src={github} alt="github" width='25px' id='github'/>
      </div>
    );
  }
}