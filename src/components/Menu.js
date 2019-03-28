import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
  render () {
    return (
      <div className="wrapper" id="menuContainer" className={this.props.visible}>
        <div>Meet The Team</div>
        <div>Schedule</div>
        <div>Location</div>
        <div>Contact</div>
      </div>
    );
  }
}

export default Menu;
