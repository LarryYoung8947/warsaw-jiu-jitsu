import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class NavBar extends Component {

  render() {
    return(
      <div id='nav-wrapper'>
        <div id='navbar' style={navContainer}>
          <div className="menu-toggle" onClick={this.props.fadeSplash} style={menuToggle}>{menuToggleIcon}</div>
          <h2 className="title" style={title}>Warsaw Jiu-Jitsu</h2>
        </div>
      </div>

    );
  }
}

const menuToggleIcon = <FontAwesomeIcon icon="water" size="2x" style={{ color: 'dimgrey', padding: '40px 0 0 8%', marginBottom: '10px'}}/>

const navContainer = {
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  position: "fixed",
  zIndex: "2",
  backgroundColor: "white",
  overflow: "hidden",
  borderRadius: "5px",
  height: "80px"
}

const menuToggle = {
  position: 'absolute',
  width: "60px",
  height: "15vh",
  paddingLeft: "12px",
  position: "relative",
  bottom: '23px',
  zIndex: '3'
}



const title = {
position: "absolute",
width: "178px",
left: "75px",
paddingTop: "30px",
color: "dimgrey",
fontSize: "1.4em",
paddingRight: "10px",
marginLeft: "10px",
zIndex: "2"
}


export default NavBar;
