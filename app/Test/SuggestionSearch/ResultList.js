import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListItem from './ListItem';

export default class ResultList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: null,
        }

    }
    render() {
        var items = [];
        for (let index = 0; index < 5; index++) {
            items.push(<ListItem loction="location {{index}}" locationDetails="location {{index}}" ></ListItem>);
        }
        return (
            <View style={{
                flex: 1,
                width: 500,
                height: 150,
                justifyContent: 'space-between',
                padding: 10,
            }}>
                {{ items }}
            </View>
        );
    }
}
