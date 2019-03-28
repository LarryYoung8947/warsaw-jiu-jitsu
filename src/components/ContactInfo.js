import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContactInfo extends Component {
  render () {
    return (
      <div className={this.props.visible} id='contact-info' style={contactStyle}>
        <p id='startTraining'>Start Training Today</p>
        <p className="info">warsawjiujitsu@gmail.com</p>
        <p className="info">(660)473-5657</p>
        <p className="info">904 Polk St Warsaw, MO 65355</p>
      </div>
    )
  }
}

const contactStyle = {
  position: 'relative',
  textAlign: 'center',
  lineHeight: '18px',
  letterSpacing: '2px',
  fontWeight: 'bold'
}


export default ContactInfo;
