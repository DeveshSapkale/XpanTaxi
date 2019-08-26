import React, {Component} from 'react';
import {View} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        width: 300,
        height: 500,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 20,
      }}>
        <View style={{
          flex: 1,
          width: 250,
          height: 200,
          alignItems: 'flex-start',
        }} />
        <View style={{
          flex: 1,
          width: 250,
          height: 50,
        }} />
        <View style={{
          flex: 1,
          width: 250,
          height: 50,
        }} />
        <View style={{
          flex: 1,
          width: 250,
          height: 50,
        }} />
        <View style={{
          flex: 1,
          width: 150,
          height: 40,
        }} />
      </View>
    );
  }
};