import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Detail from "./pages/Detail/Detail"
import Products from "./pages/Product/Product"
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Stack=createNativeStackNavigator();

const Route = () => {
  const userSession = useSelector(state => state.user)
  const isAuthloading = useSelector(state => state.isAuthloading)
  const dispatch = useDispatch()
  return (
    <NavigationContainer>
      {isAuthloading ?
        (
          <Loading />
        ) : !userSession ? (
          <Stack.Navigator>
            <Stack.Screen
              name="LoginScreen"
              component={Login}
              options={{
                headerShown: false
              }} />
          </Stack.Navigator>)
          :
          (
            <Stack.Navigator>
              <Stack.Screen
                name="ProductsScreen"
                component={Products}
                options={{
                  title: "Shopping Mall",
                  headerStyle: { backgroundColor: "#64b5f6" },
                  headerTitleStyle: { color: "white" },
                  headerTintColor: "white",
                  
                }} />
              <Stack.Screen
                name="DetailScreen"
                component={Detail}
                options={{
                  title: "Detay",
                  headerStyle: { backgroundColor: "#64b5f6" },
                  headerTitleStyle: { color: "white" },
                  headerTintColor: "white"
                }}
              />

            </Stack.Navigator>
          )
      }
    </NavigationContainer>
  );
};

export default Route;
