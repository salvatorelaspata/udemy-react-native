import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
   return (
      <View style={styles.background}>
         {/*<Image style={styles.icon} source={icon} />*/}
         <Feather name='search' size={35} color='black' style={styles.icon} />
         <TextInput
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Search...'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   background: {
      backgroundColor: '#F0EEEE',
      height: 50,
      borderRadius: 15,
      margin: 15,
      flexDirection: 'row',
      alignItems: 'center',
   },
   input: {
      flex: 1,
   },
   icon: {
      alignSelf: 'center',
      marginHorizontal: 15,
   },
});

export default SearchBar;
