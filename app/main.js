import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

console.log("Hello world!");

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
