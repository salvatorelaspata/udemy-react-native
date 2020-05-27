import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screen/SearchScreen';
import RistorantShowScreen from './src/screen/RestorantShowScreen';
const navigator = createStackNavigator(
   {
      /*
      Search: {
         screen: SearchScreen,
         navigationOptions: { title: 'Business Screen' },
      },
      */
      Search: SearchScreen,
      RestorantShow: RistorantShowScreen,
   },
   {
      initialRouteName: 'Search',
      defaultNavigationOptions: {
         title: 'Business Search',
      },
   }
);

export default createAppContainer(navigator);
