/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlayerScreen from './src/screens/PlayerScreen';
import SearchScreen from './src/screens/SearchScreen';
import ListScreen from './src/screens/ListScreen';

const Tab = createBottomTabNavigator();

const appSections = () => {
  return (
    <Tab.Navigator
      initialRouteName='Player'
      screenOptions={{
        tabBarStyle: { height: 75 },
        headerShown: false
      }}
    >
      <Tab.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={50} />
            ),
          }}
      />
      <Tab.Screen 
          name="Player" 
          component={PlayerScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="play" color={color} size={50} />
            ),
          }}
      />
      <Tab.Screen 
          name="List" 
          component={ListScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="playlist-music" color={color} size={50} />
            ),
          }}
      />
    </Tab.Navigator>
  );
}

const App = () => {

  return (
    // <SafeAreaView style={{backgroundColor: Colors.lighter}}>
      <NavigationContainer>
        {appSections()}
      </NavigationContainer>
    // </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
