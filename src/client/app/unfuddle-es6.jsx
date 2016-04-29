
var React = require('react');
var ReactDOM = require('react-dom');


// What is diff betweent this and above?
//import React from 'react';
//import {render} from 'react-dom';

import ItemBox from './ItemBox.jsx';


ReactDOM.render(
  <ItemBox url="unfuddle.com/api/v1/" />,
  document.getElementById('content')
);
