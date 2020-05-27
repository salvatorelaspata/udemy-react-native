import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const BoxScreen = () => {
   return (
      <ScrollView>
         <Text>alignItems: 'stretch' (DEFAULT)</Text>
         <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
         </View>

         <Text>alignItems: 'flex-start'</Text>
         <View style={{ ...styles.viewStyle, alignItems: 'flex-start' }}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
         </View>

         <Text>alignItems: 'center'</Text>
         <View style={{ ...styles.viewStyle, alignItems: 'center' }}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
         </View>
         <Text>alignItems: 'flex-end'</Text>
         <View style={{ ...styles.viewStyle, alignItems: 'flex-end' }}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
         </View>

         <Text>flexDirection: 'row', justifyContent: 'space-around'</Text>
         <View
            style={{
               ...styles.viewStyle,
               flexDirection: 'row',
               justifyContent: 'space-around',
            }}
         >
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={styles.textStyle}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
         </View>

         <Text>flex: 1</Text>
         <View
            style={{
               ...styles.viewStyle,
               height: 200,
               flexDirection: 'row',
            }}
         >
            <Text style={{ ...styles.textStyle, flex: 1 }}>Child #1</Text>
            <Text style={{ ...styles.textStyle, flex: 1 }}>Child #2</Text>
            <Text style={{ ...styles.textStyle, flex: 1 }}>Child #3</Text>
         </View>

         <Text>flex: 1 [Child #2]</Text>
         <View
            style={{
               ...styles.viewStyle,
               height: 200,
               flexDirection: 'row',
            }}
         >
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={{ ...styles.textStyle, flex: 1 }}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
         </View>

         <Text>flex: 1 [Child #2]</Text>
         <View
            style={{
               ...styles.viewStyle,
               height: 200,
               flexDirection: 'row',
            }}
         >
            <Text style={{ ...styles.textStyle, flex: 1 }}>Child #1</Text>
            <Text style={{ ...styles.textStyle, flex: 1 }}>Child #2</Text>
            <Text style={{ ...styles.textStyle, flex: 1 }}>Child #3</Text>
         </View>
         <Text>flex: 4 > 4 > 2</Text>
         <View
            style={{
               ...styles.viewStyle,
               height: 200,
            }}
         >
            <Text style={{ ...styles.textStyle, flex: 4 }}>Child #1</Text>
            <Text style={{ ...styles.textStyle, flex: 4 }}>Child #2</Text>
            <Text style={{ ...styles.textStyle, flex: 2 }}>Child #3</Text>
         </View>

         <Text>position: absolute [Child #2]</Text>
         <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={{ ...styles.textStyle, position: 'absolute' }}>
               Child #2
            </Text>
            <Text style={styles.textStyle}>Child #3</Text>
         </View>

         <Text>top: 10 [Child #2]</Text>
         <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text style={{ ...styles.textStyle, top: 10 }}>Child #2</Text>
            <Text style={styles.textStyle}>Child #3</Text>
         </View>

         <Text>...StyleSheet.absoluteFillObject [Child #2]</Text>
         <View style={{ ...styles.viewStyle, height: 200 }}>
            <Text style={styles.textStyle}>Child #1</Text>
            <Text
               style={{
                  ...styles.textStyle,
                  ...StyleSheet.absoluteFillObject,
               }}
            >
               Child #2
            </Text>
            <Text style={styles.textStyle}>Child #3</Text>
         </View>

         <Text>Exercise</Text>
         <View style={styles.container}>
            <View style={{ ...styles.item, backgroundColor: 'red' }}></View>
            <View
               style={{
                  ...styles.item,
                  backgroundColor: 'green',
                  alignSelf: 'flex-end' /*top: 80 || marginTop: 80*/,
               }}
            ></View>
            <View style={{ ...styles.item, backgroundColor: 'blue' }}></View>
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   viewStyle: {
      borderWidth: 3,
      borderColor: 'black',
   },
   textStyle: {
      borderWidth: 3,
      borderColor: 'red',
   },

   container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: 'black',
      height: 160,
   },
   item: {
      width: 100,
      height: 80,
   },
});

export default BoxScreen;
