import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TodayCard from './components/TodayCard';

export default function HomeScreen({navigation}) {
  const [enteredLocation, setEnteredLocation] = useState('Kathmandu');
  const [location, setLocation] = useState();

  const [loading, setLoading] = useState(false);

  const API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${enteredLocation}?unitGroup=metric&key=2X65N2JX55UXPSYKPH4MYM56Z&contentType=json`;

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
        return require('./assets/weatherImages/clear-day.png');
      case 'clear-night':
        return require('./assets/weatherImages/clear-night.png');
      case 'cloudy':
        return require('./assets/weatherImages/cloudy.png');
      case 'fog':
        return require('./assets/weatherImages/fog.png');
      case 'hail':
        return require('./assets/weatherImages/hail.png');
      case 'partly-cloudy-day':
        return require('./assets/weatherImages/partly-cloudy-day.png');
      case 'partly-cloudy-night':
        return require('./assets/weatherImages/partly-cloudy-night.png');
      case 'rain-snow-showers-day':
        return require('./assets/weatherImages/rain-snow-showers-day.png');
      case 'rain-snow-showers-night':
        return require('./assets/weatherImages/rain-snow-showers-night.png');
      case 'rain-snow':
        return require('./assets/weatherImages/rain-snow.png');
      case 'rain':
        return require('./assets/weatherImages/rain.png');
      case 'showers-day':
        return require('./assets/weatherImages/showers-day.png');
      case 'showers-night':
        return require('./assets/weatherImages/showers-night.png');
      case 'sleet':
        return require('./assets/weatherImages/sleet.png');
      case 'snow-showers-day':
        return require('./assets/weatherImages/snow-showers-day.png');
      case 'snow-showers-night':
        return require('./assets/weatherImages/snow-showers-night.png');
      case 'snow':
        return require('./assets/weatherImages/snow.png');
      case 'thunder-rain':
        return require('./assets/weatherImages/thunder-rain.png');
      case 'thunder-showers-day':
        return require('./assets/weatherImages/thunder-showers-day.png');
      case 'thunder-showers-night':
        return require('./assets/weatherImages/thunder-showers-night.png');
      case 'thunder':
        return require('./assets/weatherImages/thunder.png');
      case 'wind':
        return require('./assets/weatherImages/wind.png');

      default:
        return require('./assets/weatherImages/clear-day.png');
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
    <View style={{flex: 1, backgroundColor: '#1f193b'}}>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#ccc'}}>Loading</Text>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            paddingHorizontal: 15,
            paddingVertical: 10,
            // backgroundColor: 'red',
          }}>
          <View style={styles.textInput}>
            <TextInput
              style={styles.textField}
              placeholder="Enter Location"
              placeholderTextColor="#fff"
              onChangeText={value => setEnteredLocation(value)}
            />
            <Pressable
              onPress={() => {
                onLocationHandler(enteredLocation);
              }}>
              <Image
                style={{width: 32, height: 32, tintColor: '#fff'}}
                source={require('./assets/location.png')}
              />
            </Pressable>
          </View>

          {/* <View style={{marginTop: 10}}>
            <Text style={{fontSize: 22, color: '#f6f7f2'}}>
              {location?.resolvedAddress}
            </Text>
          </View> */}
          <Pressable onPress={() => console.log('Pressed Today Card')}>
            <TodayCard enteredLocation={enteredLocation} />
          </Pressable>

          {/* <View style={styles.todayCard}>
            <Text style={{fontSize: 14, color: '#f6f7f2'}}>
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
          </View> */}

          {/* Today */}

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.text, {fontSize: 16}]}>Today</Text>
            <Pressable
              onPress={() =>
                navigation.navigate('WeekelyForecast', {
                  location: enteredLocation,
                })
              }>
              <Text style={[styles.text, {fontSize: 16, color: '#1192e3'}]}>
                Weekely Forecast
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              borderWidth: 1,
              marginTop: 5,
              borderColor: '#292345',
            }}></View>

          <View>
            <FlatList
              data={location?.days[0]?.hours}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
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
                    <Text style={styles.text}>
                      {item.datetime.toString().slice(0, 5)}
                    </Text>
                    <Image
                      style={{width: 66, height: 42, marginVertical: 5}}
                      source={getImage(item.icon)}
                    />
                    <Text style={styles.text}>{item.temp}°C</Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#201c3d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
  },

  textField: {
    flex: 1,
    borderRadius: 16,
    padding: 10,
    color: '#fff',
  },

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

  centeredContainer: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 16,
    width: '100%',
    alignSelf: 'center',
  },

  weatherCard: {
    justifyContent: 'space-between',
    backgroundColor: '#35304e',
    alignItems: 'center',
    borderRadius: 16,
    padding: 12,
  },
});
