import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    //<View style={styles.container}>
    //  <Text>Hi there!</Text>
    //  <StatusBar style="auto" />
    //</View>
    <View style ={{flex: 1, justifyContent: 'center'} }>
      <View style ={{ flex: 10, backgroundColor: 'goldenrod'}}></View>
      <View style ={{ flex: 9, backgroundColor: 'chocolate'}}>
        <Text style={styles.firstText}>ЫЫЫЫЫЫ ПРИВЕТ</Text>
      </View>
      <View style ={{ flex: 9, backgroundColor: 'maroon'}}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
  },
});
