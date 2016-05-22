import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from './button';
import ddpClient from './ddp';
import LoggedIn from './loggedIn';

export default React.createClass({
  getInitialState() {
    return {
      connected: false,
      posts: {}
    }
  },

  componentDidMount() {
    ddpClient.connect((err, wasReconnect) => {
      let connected = true;
      if (err) connected = false

      this.setState({ connected: connected });
    });
  },

  render() {
    let body;
    if (this.state.connected) {
        body = <LoggedIn />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.center}>
            {body}
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#5efabc',
  },
  center: {
    alignItems: 'center'
  }
});
