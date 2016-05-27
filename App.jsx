import React from 'react';
let { PropTypes } = React;

class App extends React.Component {
  render() {
    let { props } = this;
    let { objectName1, objectName2, objectName3 } = props.propObject;

    return (
      <div>
        <h3>Array: {props.propArray}</h3>
        <h3>Bool: {props.propBool ? 'True' : 'False'}</h3>
        <h3>Func: {props.propFunc(3)}</h3>
        <h3>Number: {props.propNumber}</h3>
        <h3>String: {props.propString}</h3>
        <h3>Object: {objectName1}</h3>
        <h3>Object: {objectName2}</h3>
        <h3>Object: {objectName3}</h3>
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
