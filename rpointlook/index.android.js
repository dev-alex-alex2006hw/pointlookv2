import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Main from './app/components/main';

let App = React.createClass({
  render() {
    return (
      <Main />
    );
  }
});

AppRegistry.registerComponent('Pointlook', () => App);
