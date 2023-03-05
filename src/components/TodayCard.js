import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function TodayCard(props) {
  const [enteredLocation, setEnteredLocation] = useState('Kathmandu');
  const [location, setLocation] = useState();

  const [loading, setLoading] = useState(false);

  const API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${props.enteredLocation}?unitGroup=metric&key=2X65N2JX55UXPSYKPH4MYM56Z&contentType=json`;

  const onLocationHandler = async () => {
    setLoading(true);
    // console.log(value);
    try {
      const response = await fetch(API);
      const json = await response.json();
      // console.log(json);
      setLocation(json);
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

  return (
    <View style={props.style}>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#ccc'}}>Loading</Text>
        </View>
      ) : (
        <View>
          <View style={{marginTop: 10}}>
            <Text style={{fontSize: 22, color: '#f6f7f2'}}>
              {location?.resolvedAddress}
            </Text>
          </View>

          <View style={styles.todayCard}>
            <Text style={{fontSize: 14, color: '#f6f7f2'}}>
              {/* {location?.days[0]?.datetime} */}
              {dayName(date.getDay())}, {}
              {monthName(date.getMonth())} {}
              {date.getDate()} {'|'} {date.getHours()}
              {':'}
              {date.getMinutes()}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View>
                <Text
                  style={{
                    fontSize: 32,
                    color: '#f6f7f2',
                    textAlignVertical: 'center',
                    textAlign: 'center',
                  }}>
                  {location?.days[0]?.temp}°C
                </Text>
                <Text
                  style={{fontSize: 16, color: '#f6f7f2', textAlign: 'center'}}>
                  {location?.days[0]?.conditions}
                </Text>
              </View>
              <Image source={getImage(location?.days[0]?.icon)} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 10,
                backgroundColor: '#b0a3f2',
                borderRadius: 16,
                padding: 12,
              }}>
              <View>
                <Text>Feels</Text>
                <Text style={[styles.text, {textAlign: 'center'}]}>
                  {location?.days[0]?.feelslike}°C
                </Text>
              </View>
              <View>
                <Text>Humidity</Text>
                <Text style={[styles.text, {textAlign: 'center'}]}>
                  {location?.days[0]?.humidity}%
                </Text>
              </View>
              <View>
                <Text>Wind</Text>
                <Text style={[styles.text, {textAlign: 'center'}]}>
                  {location?.days[0]?.windspeed} km/h
                </Text>
              </View>
              <View>
                <Text>Pressure</Text>
                <Text style={[styles.text, {textAlign: 'center'}]}>
                  {location?.days[0]?.pressure} mbar
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#f6f7f2',
  },

  todayCard: {
    marginVertical: 16,
    padding: 16,
    borderRadius: 16,
    borderColor: '#fff',
    backgroundColor: '#599bf1',
  },
});
