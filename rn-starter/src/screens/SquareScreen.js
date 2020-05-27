import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
   const reducer = (state, action) => {
      // state === {red: number, green: number, blue: number}
      // action {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
      const { red, green, blue } = state;
      const { payload } = action;
      console.log(state, action);
      switch (action.type) {
         case 'change_red':
            return red + payload > 255 || red + payload < 0
               ? state
               : { ...state, red: red + payload };
         case 'change_green':
            return green + payload > 255 || green + payload < 0
               ? state
               : { ...state, green: green + payload };
         case 'change_blue':
            return blue + payload > 255 || blue + payload < 0
               ? state
               : { ...state, blue: blue + payload };
         default:
            return state;
      }
   };

   const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
   const { red, green, blue } = state;
   return (
      <View>
         <ColorCounter
            color='Red'
            onIncrease={() =>
               dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
            }
            onDecrease={() =>
               dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
            }
         />
         <ColorCounter
            color='Green'
            onIncrease={() =>
               dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
            }
            onDecrease={() =>
               dispatch({
                  type: 'change_green',
                  payload: -1 * COLOR_INCREMENT,
               })
            }
         />
         <ColorCounter
            color='Blue'
            onIncrease={() =>
               dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
            }
            onDecrease={() =>
               dispatch({
                  type: 'change_blue',
                  payload: -1 * COLOR_INCREMENT,
               })
            }
         />
         <View
            style={{
               height: 100,
               width: 100,
               backgroundColor: `rgb(${red},${green},${blue})`,
            }}
         />
      </View>
   );
};

const styles = StyleSheet.create({});

export default SquareScreen;
