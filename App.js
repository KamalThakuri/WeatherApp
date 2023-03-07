import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import HomeScreen from './src/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WeekelyForecast from './src/WeekelyForecast';
import SplashScreen from './src/components/views/SplashScreen';

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
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
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
      <StatusBar translucent backgroundColor={'transparent'} height={'20'} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
