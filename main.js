import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(
  <App headerProp={'Header'} contentProp={'Content'} />,
  document.getElementById('app')
);
