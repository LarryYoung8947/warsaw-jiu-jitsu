import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Testimonial extends Component {
  render () {
    return (
      <div className='' id='testimonialContainer' style={testimonialStyle}>
        <div id="starBar" style={starBarStyle}>
          <div className="staricondiv">{starIcon}</div>
          <div className="staricondiv">{starIcon}</div>
          <div className="staricondiv">{starIcon}</div>
          <div className="staricondiv">{starIcon}</div>
          <div className="staricondiv">{starIcon}</div>
        </div>
        <div id="quoteBox">
          <p id="quote1" style={quoteStyle}>Jiu-Jitsu is not just a sport, it's a way of life. It can also save your life.</p>
          <h3 id="name1">Sherri Miller</h3>
        </div>

      </div>
    )
  }
}

const starIcon = <FontAwesomeIcon icon="star"/>
const testimonialStyle = {
  
}

const starBarStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  padding: '5px',
  justifyContent: 'center'
}



const quoteStyle = {
  fontSize : '0.8rem',
  padding: '10px',
  width: '70vw',
  marginLeft: '15vw'
}


export default Testimonial;
