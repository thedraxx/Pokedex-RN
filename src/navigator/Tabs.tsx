/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigator from './Tab1';
import Tab2Screen from './Tab2Screen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 0,
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.82)',
          paddingBottom: 10, // ( Platform.OS === 'ios') ? 0 : 10,
          borderWidth: 0,
          elevation: 0,
          height: 60, // ( Platform.OS === 'ios') ? 70 : 80,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Navigator}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color }) => (
            <Icon
              color={color}
              size={20}
              name="list-outline"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon
              color={color}
              size={20}
              name="search-outline"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
