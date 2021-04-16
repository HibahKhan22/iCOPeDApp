import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import WeatherData from './WeatherData';

const Weather = ({ loading, data, error }) => {
  if (error) {
    console.log("weatherjs:",error);
    console.log("weatherjs:",error);
    return <View style={styles.container}>
      <Text style={styles.error}>{error}</Text>
    </View>;
  }

  if (!loading && !data) {
    console.log("weather loading",loading);
    console.log("weather data",data);
    console.log("weather:",error);
    return null;
  }
  console.log("weather data",data);
  return (
    
    <View style={styles.container}>
      { loading ? <ActivityIndicator size="large" color="#00d1b2" /> : <WeatherData data={data} /> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#e6f2f2'
  },
  error: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Weather;