/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import Category from './screens/Category';
import SelectedCategory from './screens/SelectedCategory';
import Web from './screens/Webview';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Top Stories" component={HomeScreen} />
      <HomeStack.Screen name="Web" component={Web} />
    </HomeStack.Navigator>
  );
}

const CategoryStack = createNativeStackNavigator();

function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen name="Category" component={Category} />
      <CategoryStack.Screen name="Selected Category" component={SelectedCategory} />
      <CategoryStack.Screen name="Web" component={Web} />
    </CategoryStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#e91e63' }}>
        <Tab.Screen 
          name="Top Stories" 
          component={HomeStackScreen} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name='globe' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Category" 
          component={CategoryStackScreen} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name='apps-sharp' color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


function App(){
  return (
    <NativeBaseProvider>
        <MyTabs />
    </NativeBaseProvider>
  );
}


export default App;
