import {
    createAppContainer
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';
import HomeScreen from './Screens/HomeScreen';
import TestScreen from './Screens/TestScreen';

const navigator = createStackNavigator({
    Home: HomeScreen,
    Test: TestScreen
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'App'
    }
});

export default createAppContainer(navigator);