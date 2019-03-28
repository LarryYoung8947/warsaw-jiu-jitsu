import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faWater } from '@fortawesome/free-solid-svg-icons'
import NavBar from './components/NavBar';
import Slideshow from './components/Slideshow'
import ContactInfo from './components/ContactInfo'
import Menu from './components/Menu'
import Testimonial from './components/Testimonial'

import './App.css';

library.add(faWater, faStar)

class App extends Component {

  state = {
    splash: true,
    menu: false,
    animate: true
  };

  fadeSplash = () => {
    this.setState({ splash: !this.state.splash, menu: !this.state.menu, animate: !this.state.animate });
  }

  render() {
    return (
      <div className="App">
        <NavBar fadeSplash={this.fadeSplash}/>
        <div id="contentWrapper">
          <Slideshow animate={this.state.animate} visible={this.state.splash?'fadeIn':'fadeOut'}/>
          <ContactInfo/>
          <Menu visible={this.state.menu?'fadeIn':'fadeOut'}/>
          <Testimonial/>
        </div>
      </div>
    );
  }
}

export default App;
