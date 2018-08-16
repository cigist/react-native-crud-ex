import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Count extends Component{
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>
        <TouchableOpacity>
          <Text style = {styles.text}>
             +
          </Text>
       </TouchableOpacity>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}>
        <TouchableOpacity>
            <Text style = {styles.text}>
               +
            </Text>
         </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
   },
   text: {
      borderWidth: 1,
      padding: 0,
      borderColor: 'black',
      backgroundColor: 'red'
   }
})
