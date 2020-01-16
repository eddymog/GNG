import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const CommonTouchableOpacity = (props) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => props.onPress}
  >
    <Text>{props.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});

export default CommonTouchableOpacity;