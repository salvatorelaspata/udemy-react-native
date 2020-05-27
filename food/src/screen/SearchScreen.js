import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import { ScrollView } from 'react-native-gesture-handler';
const SearchScreen = () => {
   const [term, setTerm] = useState('');
   const [searchAPI, results, errorMessage] = useResults();

   const filterResultsByPrice = (price) => {
      //price '$' || '$$' || '$$$'
      return results.filter((result) => {
         return result.price == price;
      });
   };
   return (
      <View style={styles.container}>
         <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchAPI(term)}
         />
         {errorMessage ? <Text>{errorMessage}</Text> : null}
         <ScrollView>
            <RestaurantList
               title='Cost Effective'
               results={filterResultsByPrice('€')}
            />
            <RestaurantList
               title='Big Pricier'
               results={filterResultsByPrice('€€')}
            />

            <RestaurantList
               title='Big Spender'
               results={filterResultsByPrice('€€$')}
            />
         </ScrollView>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
   },
});

export default SearchScreen;
