import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => {
   return (
      <View>
         <Image source={imageSource} />
         <Text>{title}</Text>
         <Text>Score is: {score}!</Text>
      </View>
   );
};

const styles = StyleSheet.create({});
export default ImageDetail;
