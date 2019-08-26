import React, { Component } from 'react';

import { Button, Text, Image, StyleSheet, View, TextInput, TouchableOpacity, Dimensions, AppRegistry } from "react-native";
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export default class Login extends Component {
  render() {
    return (
      <View style={{
        width: WIDTH,
        height: HEIGHT,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20,
      }}>
        <View style={{
          width: (WIDTH - 40),
          height: 250,
          padding: 10,
          bottom: 30,
          alignItems: 'center',
        }}>
          <Image style={{
             resizeMode: 'stretch',
             width: 200,
        }}
            source={require('../../assets/xpool.png')}
          />
        </View>
        <View style={{
          width: 250,
          height: 200,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <TextInput
            placeholder="UserName"
            style={{
              paddingLeft: 10,
              width: (WIDTH - 40),
              height: 60,
              borderRadius: 25,
              borderColor: 'black',
              borderStyle: 'solid',
              borderWidth: 1
            }} >
          </TextInput>
          <TextInput
            placeholder="Password"
            style={{
              paddingLeft: 10,
              width: (WIDTH - 40),
              height: 60,
              borderRadius: 25,
              borderColor: 'black',
              borderStyle: 'solid',
              borderWidth: 1
            }}></TextInput>

          <Button
            title="Log In"
            style={{
              width: 200,
              height: 80,
              borderRadius: 25,
            }} ></Button>

        </View>

      </View>
    );
  }
};

