import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Screens/HomeScreen';

const navigator = createStackNavigator(
    {
      Home: HomeScreen,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        title: 'App'
      }
    }
  );
  
  export default createAppContainer(navigator);