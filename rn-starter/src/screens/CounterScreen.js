import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CounterScreen = () => {
   const reducer = (state, action) => {
      //state === {count: number}
      //action === {type: 'increment' || 'decrement', payload: 11}
      const { type, payload } = action;
      const { count } = state;
      switch (type) {
         case 'increment':
            return { ...state, count: count + payload };
         case 'decrement':
            return { ...state, count: count - payload };
         default:
            return state;
      }
   };
   const [state, dispatch] = useReducer(reducer, { count: 0 });
   return (
      <View>
         <Button
            title='Increase'
            onPress={() => {
               dispatch({ type: 'increment', payload: 1 });
            }}
         />
         <Button
            title='decrease'
            onPress={() => {
               dispatch({ type: 'decrement', payload: 1 });
            }}
         />
         <Text>Current Count: {state.count}</Text>
      </View>
   );
};

const styles = StyleSheet.create({});

export default CounterScreen;
