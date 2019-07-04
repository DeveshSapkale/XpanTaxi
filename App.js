import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/component/login'
import Map from './app/component/map';
export default function App() {
  return (
    <View style={styles.container}>
      <Map></Map>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
