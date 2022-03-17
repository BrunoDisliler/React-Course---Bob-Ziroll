import React from 'react';
import './App.css';
import Contact from './Components/Contact';
import Whiskerson from './images/mr-whiskerson.png';
import Pastor from './images/pastor.png';
import Golden from './images/golden.png';
import ViraLata from './images/vira-lata.png';


export default class App extends React.Component {
  render() {
    return (
      <div className='contacts'>
        <Contact 
          img={Golden}
          name="Mr. Whinkerson"
          phone="23 2324 2324 22"
          mail="Whinkerson@ptraulhaCanina.com"
        />
        <Contact 
          img={Pastor}
          name="Thor"
          phone="48 9953 432 234"
          mail="thor@patrulhaCanina.com"
        />
        <Contact 
          img={Whiskerson}
          name="Jake"
          phone="34 2321 1412"
          mail="Jake@patrulhaCanina.com"
        />
        <Contact 
          img={ViraLata}
          name="Salsicha"
          phone="23 534 232 3424"
          mail="salsicha@patrulhaCanina.com"
        />
      </div>  
    );
  }
}
