import React, { Component } from "react";
import { Text, Image, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    render() {
        return (
            <View>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                />
                <Text>
                    User Name:
                </Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <Text >
                    Password:
                </Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <TouchableOpacity
                    onPress={this.onPress}
                >
                    <Text> Login </Text>
                </TouchableOpacity>
            </View>
        );


        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            },

            button: {
                alignItems: 'center',
                backgroundColor: '#DDDDDD',
                padding: 10
            },
        });
    }

    onPress = () => {
        this.setState({
            text: this.state.text + 1
        })
    }


}