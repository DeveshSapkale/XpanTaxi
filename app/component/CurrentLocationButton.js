import React, { Component } from "react";
import { Text, Image, StyleSheet, View, TextInput, TouchableOpacity, Dimensions, AppRegistry } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const currentLocationButton = function (props) {
    const bottom = props?props:65;
    return (
        <View className={[styles.container, {top: HEIGHT - bottom}]}>
            <MaterialIcons
                nam="my-location"
                color="#000000"
                size={25}
                onPress={() => {}}
            />
        </View >
    )
 }

const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        position: 'absolute',
        width: 45,
        height: 45,
        top: 110,
        left: WIDTH - 70,
        borderRadius: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#000000',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
        justifyContent: 'space-around'
    },
});

export default currentLocationButton;