import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Login from './component/Login';
import Register from './component/Register_email';
import MCQPage from './component/MCQPage';



const Stack = createNativeStackNavigator();


export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name = "Login" component = {Login} />
          <Stack.Screen name = "Register" component = {Register} />
          <Stack.Screen name = "MCQPage" component = {MCQPage} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

