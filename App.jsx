import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="home">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default App;
