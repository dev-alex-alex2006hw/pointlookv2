import React from 'react';
import { View, Text } from 'react-native';

import Button from './button';
import ddpClient from './ddp';

export default React.createClass({
    getInitialState() {
        return {
            posts: {}
        }
    },
    componentDidMount() {
        this.makeSubscription();
        this.observePosts();
    },

    observePosts() {
        let observer = ddpClient.observe("posts");
        observer.added = (id) => {
            this.setState({posts: ddpClient.collections.posts})
        }
        observer.changed = (id, oldFields, clearedFields, newFields) => {
             this.setState({posts: ddpClient.collections.posts})
        }
        observer.removed = (id, oldValue) => {
            this.setState({posts: ddpClient.collections.posts})
        }
     },

    makeSubscription() {
        ddpClient.subscribe("posts", [], () => {
             this.setState({posts: ddpClient.collections.posts});
        });
  },

    handleIncrement() {
        ddpClient.call('addPost');
    },

    handleDecrement() {
        ddpClient.call('deletePost');
    },

    render() {
        let count = Object.keys(this.state.posts).length;
        return (
            <View>
                <Text>Posts: {count}</Text>
                <Button text="Increment" onPress={this.handleIncrement}/>
                <Button text="Decrement" onPress={this.handleDecrement}/>
            </View>
        );
    }
});