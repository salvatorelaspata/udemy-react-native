import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Hi there';
  const greetingElement = <Text>Hi there</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Ciaone Proprio</Text>
      <Text>{greeting}</Text>
      {greetingElement}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
