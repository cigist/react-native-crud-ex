import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class Home extends Component{
    constructor(){
        super();
        this.updateMyState = this.updateMyState.bind(this);
    }
    state = {
        myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    }

    updateMyState = () => this.setState(
        {
            myState:'Dodol Garut'
        }
    )
    render() {
        return (
          <View>
            <Text style={styles.container} onPress={this.updateMyState}>{this.state.myState}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
    }
  });
  
