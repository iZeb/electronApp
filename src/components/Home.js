import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Title from './Title';
import LeftPage from './LeftPage';

export default class Home extends Component {

  render() {
    return (
      <div>
        <Title></Title>
        <LeftPage/>
      </div>
    );
  }
}
