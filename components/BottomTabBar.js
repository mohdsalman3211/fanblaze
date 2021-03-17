import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsList from './NewsList'
import Match from './Match'
import ProfileScreen from './ProfileScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

export default function BottomTabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
     screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Match') {
          iconName = focused ? 'list' : 'list';
        }
        else if (route.name === 'Profile') {
          iconName = focused ? 'user' : 'user';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }} tabBarOptions={{
        labelStyle:{
          fontSize:10
        }
      }
      }
      >
        <Tab.Screen name="Home" component={NewsList}  />
        <Tab.Screen name="Match" component={Match} />
        <Tab.Screen name="Profile" component={ProfileScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}