import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/searchScreen';
import ResultShowScreen from './src/screens/resultShowScreen';

const navigator= createStackNavigator({
  Search:SearchScreen,
  Result:ResultShowScreen
},{
   initialRouteName:'Search',
   defaultNavigationOptions:{
    title:'Business Search',
    headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
   }
  
});

export default createAppContainer(navigator);