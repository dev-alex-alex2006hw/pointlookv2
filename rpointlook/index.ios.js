/**
 * PointLook App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './app';

class PointLook extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('PointLook', () => PointLook);
