import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import client from './Graphql';
import { Navbar } from './common/Navbar';
import { ApolloProvider } from 'react-apollo';
import { Footer } from './common/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <div className="App">
            <Router>
              <React.Fragment>
                <Navbar/>
                <header></header>
                <main>
                  <body></body>
                </main>
                {Routes}
                <Footer />
              </React.Fragment>
            </Router>
          </div>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
