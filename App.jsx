import React from 'react';
let { PropTypes } = React;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    }

    this.setStateHandler = this.setStateHandler.bind(this);
  }

  setStateHandler() {
    let item = 'setState...';
    let myArray = this.state.data;
    myArray.push(item);
    this.setState({ data: myArray });
  }

  render() {
    return (
      <div>
        <button onClick = {this.setStateHandler}>SET STATE</button>
        <h4>State: {this.state.data}</h4>
      </div>
    );
  }
}

App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  propObject: PropTypes.object
}

App.defaultProps = {
  propArray: [1, 2, 3, 4, 5],
  propBool: true,
  propFunc: function (e) { return e },
  propNumber: 1,
  propString: 'Hello World',

  propObject: {
    objectName1: '1',
    objectName2: '2',
    objectName3: '3'
  }
}

export default App;
