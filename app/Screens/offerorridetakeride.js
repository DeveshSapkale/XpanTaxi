import React, {Component} from 'react';
import {View} from 'react-native';

export default class OfferOrTakeRide extends Component {
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
          height: 150,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}>
          <View style={{
            flex: 1,
            width: 150,
            height: 130,
          }} />
        </View>
        <View style={{
          flex: 1,
          width: 250,
          height: 20,
        }} />
        <View style={{
          flex: 1,
          width: 250,
          height: 30,
        }} />
        <View style={{
          flex: 1,
          width: 250,
          height: 20,
        }} />
        <View style={{
          flex: 1,
          width: 250,
          height: 30,
        }} />
        <View style={{
          flex: 1,
          width: 250,
          height: 30,
        }} />
        <View style={{
          flex: 1,
          width: 250,
          height: 30,
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