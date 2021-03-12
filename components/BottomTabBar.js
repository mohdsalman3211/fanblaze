import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewsList from './NewsList'

const Tab = createBottomTabNavigator();

export default function BottomTabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{
        labelStyle:{
          fontSize:20
        }
      }
      }
      >
        <Tab.Screen name="Home" component={NewsList}  />
        <Tab.Screen name="Settings" component={NewsList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}