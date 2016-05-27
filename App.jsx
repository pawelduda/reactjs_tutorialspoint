import React from 'react';
let { PropTypes } = React;

class App extends React.Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <button onClick = {this.forceUpdateHandler}>SET STATE</button>
        <h4>Random number: {Math.random()}</h4>
      </div>
    );
  }
}

export default App;
