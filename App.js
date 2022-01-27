/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import ListScreen from './src/screens/ListScreen';
import PlayerScreen from './src/screens/PlayerScreen';
import SearchScreen from './src/screens/SearchScreen';





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
    <SafeAreaProvider style={{backgroundColor: Colors.lighter}}>
      <NavigationContainer>
        {appSections()}
      </NavigationContainer>
    </SafeAreaProvider> 
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
