import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import Count from '../count/count';
export default class Home extends Component{
    constructor(){
        super();
    }
    state = {
        myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        text:''
    }
    updateMyState = () =>{
      this.setState({myState:'Kodok'});
    }
    render() {
        return (
          <View>
            <Text style={styles.container} onPress={this.updateMyState}>{this.state.myState}</Text>
            <TextInput
              style={{height:40}}
              placeholder="Input text here!"
              onChangeText={(text) => this.setState({text})}
            />
          <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="Press Me"
           />
           <Text style={{padding: 10, fontSize: 42}}>{this.state.text}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'green',
    }
  });
