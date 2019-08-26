import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ResultList from './ResultList';
export default class Search {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ searchText:text })}
          value={this.state.searchText}
        />
        <ResultList></ResultList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
