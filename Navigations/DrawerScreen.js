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


const Drawer = createDrawerNavigator();




const DrawerScreen = () => {
   
        return (
           <Drawer.Navigator 
      
              drawerContentOptions={{
              activeTintColor: '#e74c3c',
              activeBackgroundColor:   '#d6eaf8'  ,
              labelStyle: {fontSize:14, fontWeight:'bold'},
              
              
            }}
            screenOptions ={{
              headerShown: true,
              headerTitle:'Grocery Store',
              headerTintColor:'#e74c3c',
              headerTitleAlign:'center',
           }}
            
            
            drawerStyle={ { width: '75%', }}
            overlayColor="transparent"
            
      >

            <Drawer.Screen name="Home" component={BottomTab}
              options={{          
              drawerIcon: ({focused, size}) => (
               <Feather  name="home"  size={16}    color={focused ? '#e74c3c' : '#ccc'}/>
                ),}}
            />          
        
           
                  
        
          <Drawer.Screen name='Settings' component={Settings} 
                 options={{          
                  drawerIcon: ({focused, size}) => (
                  <Feather  name="settings"  size={16}   color={focused ? '#e74c3c' : '#ccc'} />
                       ),}}
            />

      </Drawer.Navigator> 
    
        );
  
};


export default DrawerScreen;