/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Tweet }  from 'react-native-fabric-twitterkit';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}>
          <Tweet
            style={{ flex: 1, height: 200 }}
            tweetId='788105828461006848'/>
           <Tweet
            style={{ flex: 1 }}
            tweetId='788105828461006848'/>
        </ScrollView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
