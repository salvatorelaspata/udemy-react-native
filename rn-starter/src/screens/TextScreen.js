import React, { useReducer, useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const TextScreen = () => {
   const [password, setPassword] = useState('');
   return (
      <View>
         <Text>Enter Password:</Text>
         <TextInput
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            autoCompleteType='password'
            secureTextEntry={true}
            onChangeText={(newValue) => {
               setPassword(newValue);
            }}
         />
         {password.length < 4 ? (
            <Text style={styles.textError}>
               Password must be longer than 4 characters
            </Text>
         ) : null}
      </View>
   );
};

const styles = StyleSheet.create({
   input: {
      margin: 15,
      borderColor: 'black',
      borderWidth: 1,
   },
   textError: {
      color: 'red',
   },
});

export default TextScreen;
