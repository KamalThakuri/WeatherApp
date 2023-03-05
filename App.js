import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WeekelyForecast from './src/WeekelyForecast';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#1f193b',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WeekelyForecast"
          component={WeekelyForecast}
          options={{
            headerTitle: 'Weekely Forecast',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
