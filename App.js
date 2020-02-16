import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import ModalExample from './src/screens/ModalExample';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
  ModalExample: ModalExample,

}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'LET\'S EAT'
  }
});

export default createAppContainer(navigator);