
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppContainer from './Navigations/AppContainer';
import DrawerScreen from './Navigations/DrawerScreen';
import BottomTab from './Navigations/BottomTab'; 
import Home from './Src/Home';
import Settings from './Src/Settings';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (

     <NavigationContainer>
     
<AppContainer />
      </NavigationContainer>
  );
};

export default App;

  
// export default AppContainer;