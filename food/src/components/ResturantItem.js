import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResturantItem = ({ name, urlImage, stars, review }) => {
   return (
      <View style={styles.container}>
         <Image source={{ uri: urlImage }} style={styles.image} />
         <Text style={styles.name}> {name}</Text>
         <Text>
            {stars} Stars, {review} Review
         </Text>
      </View>
   );
};

var styles = StyleSheet.create({
   container: {
      marginLeft: 15,
   },

   image: {
      width: 250,
      height: 120,
      borderRadius: 10,
      marginBottom: 5,
   },

   name: {
      fontWeight: 'bold',
      fontSize: 16,
   },
});

export default ResturantItem;
