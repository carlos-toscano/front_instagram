import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {

  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Curso Cinta Negra Dev.F</h5>
              <p className="grey-text text-lighten-4">Proyecto Instagram.</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2018 AS Team
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
