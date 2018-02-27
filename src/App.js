import React, { Component } from 'react';

//styles
import './App.css';
import './styles/main.css';

import Header from './components/header_and_footer/header';
import Footer from './components/header_and_footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <Header />
              <div className="component">
                {this.props.children}
              </div>
          <Footer />
          
        </div>
      </div>
    );
  }
}


export default App;
