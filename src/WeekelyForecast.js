import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TodayCard from './components/TodayCard';
import WeekelyCard from './components/WeekelyCard';

export default function WeekelyForecast({route}) {
  const {location} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: '#1f193b'}}>
      <TodayCard enteredLocation={location} style={styles.container} />
      <View
        style={{
          borderWidth: 1,
          marginTop: 5,
          borderColor: '#292345',
        }}></View>
      <WeekelyCard enteredLocation={location} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,

    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
