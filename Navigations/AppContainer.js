import React, { Component } from 'react'
import { Text, View } from 'react-native';

import Home from '../Src/Home';
import Settings from '../Src/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import BottomTab from './BottomTab';
import DrawerScreen from './DrawerScreen';




const Stack = createStackNavigator();

const AppContainer = () => {
   
        return (
           
            <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
            >
                 
                   {/* <Stack.Screen name='Home' component={Home} />
                   <Stack.Screen name='Settings' component={Settings} /> */}
                   <Stack.Screen name='Drawer' component={DrawerScreen} 
                   
                               
                  
                   />
                   <Stack.Screen name='Bottom' component={BottomTab} />

            </Stack.Navigator>

              
    
        );
  
};


export default AppContainer;

