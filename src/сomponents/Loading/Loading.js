import React from "react";
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'}/>
      <Text style={styles.text}>Загрузка...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal:30,
    paddingVertical: 100,
    backgroundColor: '#65C7F7'
  },
  text: {
    fontSize: 30,
    color: '#ffffff'
  }
});

export default Loading;