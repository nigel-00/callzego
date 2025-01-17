
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen  from './screens/HomeScreen';
import AddChatScreen from './screens/AddChartScreen';
import ChatScreen from './screens/ChatScreen';
import CallPage from './screens/CallPage';
import CallTransfer from './screens/CallTransfer';

const Stack  = createStackNavigator();
const globalScreenOptions = {
  headerStyle: {backgroundColor: "#2C6BED"}, /* background color of the header to be blue */
  headerTitleStyle: {color: "white"}, /* color of the header text to be white */
  headerTintColor: "white",  /* any  icons put  in the title will be white */
}


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={globalScreenOptions}> 
    <Stack.Screen name='Login' component={LoginScreen}/>
    <Stack.Screen name='Register' component={RegisterScreen}/>
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='AddChat' component={AddChatScreen}/>
    <Stack.Screen name='Chat' component={ChatScreen}/>
    <Stack.Screen name="CallTransfer" component={CallTransfer} />
    <Stack.Screen name="CallPage" component={CallPage} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

