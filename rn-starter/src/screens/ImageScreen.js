import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
   const images = [
      {
         id: 0,
         title: 'Forest',
         image: require('../../assets/forest.jpg'),
         score: 1,
      },
      {
         id: 1,
         title: 'Beach',
         image: require('../../assets/beach.jpg'),
         score: 9,
      },
      {
         id: 2,
         title: 'Mountain',
         image: require('../../assets/mountain.jpg'),
         score: 7,
      },
   ];

   return (
      <View>
         {images.map((e) => {
            return (
               <ImageDetail
                  key={e.id}
                  title={e.title}
                  imageSource={e.image}
                  score={e.score}
               />
            );
         })}
      </View>
   );
};

const styles = StyleSheet.create({});
export default ImageScreen;
