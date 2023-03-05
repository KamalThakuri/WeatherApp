import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function WeekelyCard(props) {
  const [location, setLocation] = useState();

  const [loading, setLoading] = useState(false);

  const API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${props.enteredLocation}?unitGroup=metric&key=2X65N2JX55UXPSYKPH4MYM56Z&contentType=json`;

  const onLocationHandler = async () => {
    // const epochDayy = new Date(location?.days[0]?.datetimeEpoch);
    // weekelyDay;

    setLoading(true);
    // console.log(value);
    try {
      const response = await fetch(API);
      const json = await response.json();
      // console.log(json);
      setLocation(json);
      //   console.log(epochDayy.toUTCString());
      // console.log('json value', location);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    onLocationHandler();
  }, []);

  const getImage = name => {
    switch (name) {
      case 'clear-day':
        return require('../assets/weatherImages/clear-day.png');
      case 'clear-night':
        return require('../assets/weatherImages/clear-night.png');
      case 'cloudy':
        return require('../assets/weatherImages/cloudy.png');
      case 'fog':
        return require('../assets/weatherImages/fog.png');
      case 'hail':
        return require('../assets/weatherImages/hail.png');
      case 'partly-cloudy-day':
        return require('../assets/weatherImages/partly-cloudy-day.png');
      case 'partly-cloudy-night':
        return require('../assets/weatherImages/partly-cloudy-night.png');
      case 'rain-snow-showers-day':
        return require('../assets/weatherImages/rain-snow-showers-day.png');
      case 'rain-snow-showers-night':
        return require('../assets/weatherImages/rain-snow-showers-night.png');
      case 'rain-snow':
        return require('../assets/weatherImages/rain-snow.png');
      case 'rain':
        return require('../assets/weatherImages/rain.png');
      case 'showers-day':
        return require('../assets/weatherImages/showers-day.png');
      case 'showers-night':
        return require('../assets/weatherImages/showers-night.png');
      case 'sleet':
        return require('../assets/weatherImages/sleet.png');
      case 'snow-showers-day':
        return require('../assets/weatherImages/snow-showers-day.png');
      case 'snow-showers-night':
        return require('../assets/weatherImages/snow-showers-night.png');
      case 'snow':
        return require('../assets/weatherImages/snow.png');
      case 'thunder-rain':
        return require('../assets/weatherImages/thunder-rain.png');
      case 'thunder-showers-day':
        return require('../assets/weatherImages/thunder-showers-day.png');
      case 'thunder-showers-night':
        return require('../assets/weatherImages/thunder-showers-night.png');
      case 'thunder':
        return require('../assets/weatherImages/thunder.png');
      case 'wind':
        return require('../assets/weatherImages/wind.png');

      default:
        return require('../assets/weatherImages/clear-day.png');
    }
  };

  const date = new Date();
  const monthName = month => {
    switch (month) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';
    }
  };

  const dayName = day => {
    switch (day) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
    }
  };

  const timeStamp = value => {
    const newDate = new Date(value * 1000);
    const day = newDate.getDay();
    // const hours = newDate.getHours();
    // const minutes = newDate.getMinutes();
    // const formatTime = hours + ':' + minutes.toString();
    // console.log(formatTime);
    return day;
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.weekCard}>
        <FlatList
          data={location?.days}
          //   horizontal={true}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={styles.weatherCard}>
                {/* <Text style={styles.text}>
                  {item.datetime.toString().slice(5)}
                </Text> */}
                <Text style={styles.text}>
                  {dayName(timeStamp(item.datetimeEpoch))}
                </Text>
                <Image
                  style={{width: 66, height: 42, marginVertical: 5}}
                  source={getImage(item.icon)}
                />
                <Text style={styles.text}>{item.conditions}</Text>

                <Text style={styles.text}>
                  {item.temp.toString().slice(0, 2)}°C
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#f6f7f2',
  },

  weekCard: {
    paddingHorizontal: 15,
    // paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  weatherCard: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#35304e',
    alignItems: 'center',
    borderRadius: 16,
    padding: 12,
  },
});
