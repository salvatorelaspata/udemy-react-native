import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
   const friends = [
      { name: 'Frient #1', id: '1', age: 20 },
      { name: 'Frient #2', id: '2', age: 45 },
      { name: 'Frient #3', id: '3', age: 32 },
      { name: 'Frient #4', id: '4', age: 27 },
      { name: 'Frient #5', id: '5', age: 53 },
      { name: 'Frient #7', id: '7', age: 30 },
   ];

   return (
      <FlatList
         horizontal={false}
         showsHorizontalScrollIndicator={false}
         keyExtractor={(friend) => friend.id}
         data={friends}
         renderItem={({ item }) => {
            return (
               <Text style={styles.textStyle}>
                  {item.name} - Age {item.age}
               </Text>
            );
         }}
      />
   );
};

const styles = StyleSheet.create({
   textStyle: {
      marginVertical: 50,
   },
});

export default ListScreen;
