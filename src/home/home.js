import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class Home extends Component{
    state = {
        myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    }
    render() {
        return (
          <View>
            <Text>{this.state.myState}</Text>
          </View>
        );
    }
}
