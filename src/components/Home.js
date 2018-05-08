import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Title from './Title'

export default class Home extends Component {

  render() {
    return (
      <div>
        <Title></Title>
        <div data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
