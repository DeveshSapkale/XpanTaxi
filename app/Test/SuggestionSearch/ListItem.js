import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: null,
        }
        this.setItems();
    }
    render() {
        return (
            <View style={{
                flex: 1,
                width: 500,
                height: 150,
                justifyContent: 'space-between',
                padding: 10,
            }}>
                <View style={{
                    flex: 1,
                    height: 100,
                    maxHeight: 50,
                    alignSelf: 'stretch',
                    flexGrow: 0,
                    flexShrink: 1,
                }} >
                    <Text>
                        {this.props.loction}
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                    height: 50,
                    justifyContent: 'space-between',
                    paddingTop: 10,
                }} >
                    <Text>
                        {this.props.locationDetail}
                    </Text>
                </View>
            </View>
        );
    }
}
