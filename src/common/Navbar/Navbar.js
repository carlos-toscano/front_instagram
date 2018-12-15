import React, { Component } from 'react';
import payload from './../../payload';
import './Navbar.scss';

class Navbar extends Component {

  render() {
    return (
      <nav>
        <div className="nav-wrapper bg-main">
          <a href="/" className="brand-logo">Instagram CLN</a>
          <ul className="right hide-on-med-and-down">
            {
              localStorage.getItem('token') !== null ? (
                <React.Fragment>
                  <li><a href="/me">Hola { payload().email }</a></li>
                  <li><a href="/photos">Fotos</a></li>
                  <li><a href="/logout">Log Out</a></li>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <li>

                    <a href="/login"><i className="small material-icons" style={{display: 'inline-block'}}>account_box</i>Login</a>
                  </li>
                  <li>

                    <a href="/signup"><i className="small material-icons" style={{display: 'inline-block'}}>add_box</i>Sign Up</a></li>
                </React.Fragment>
              )
            }
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
