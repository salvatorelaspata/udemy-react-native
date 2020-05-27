import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ex1 = () => {
  const name = 'Salvatore';
  return (
    <View>
      <Text style={styles.firstText}>Getting started with React Native!</Text>
      <Text style={styles.secondText}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  firstText: {
    fontSize: 45,
  },
  secondText: {
    fontSize: 20,
  },
});

export default Ex1;
