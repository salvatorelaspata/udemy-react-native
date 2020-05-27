import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import ResturantItem from './ResturantItem';

const RestaurantList = ({ title, results }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>
            {title} ({results.length})
         </Text>
         <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => {
               result.id;
            }}
            renderItem={({ item }) => {
               return (
                  <ResturantItem
                     name={item.name}
                     urlImage={item.image_url}
                     review={item.review_count}
                     stars={item.rating}
                  />
               );
            }}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      marginBottom: 10,
   },
   title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 15,
      marginBottom: 10,
   },
});

export default RestaurantList;
