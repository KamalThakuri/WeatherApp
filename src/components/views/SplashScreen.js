import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#1f193b',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/splashscreen.png')}
        style={{resizeMode: 'contain', height: '100%', width: '100%'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
