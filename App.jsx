import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerProp: 'Default header',
      contentProp: 'Default content'
    }
  }

  render() {
    return (
      <div>
        <Header headerProp={this.state.headerProp} />
        <Content contentProp={this.state.contentProp} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <h1>{this.props.headerProp}</h1>
    )
  }
}

class Content extends React.Component {
  render() {
    return (
      <h2>{this.props.contentProp}</h2>
    )
  }
}

export default App;
