import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.getDomNodeHandler = this.getDomNodeHandler.bind(this);
  }

  getDomNodeHandler() {
    let element = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'green';
  }

  render() {
    return (
      <div>
        <button onClick = {this.getDomNodeHandler}>SET STATE</button>
        <div id='myDiv'>NODE</div>
      </div>
    );
  }
}

export default App;
