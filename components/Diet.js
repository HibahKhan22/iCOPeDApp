import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import DietData from './DietData';

const Diet = ({ loading1, data1, error1 }) => {
  if (error1) {
    return <View style={styles.container}>
      <Text style={styles.error1}>{error1}</Text>
    </View>;
  }

  if (!loading1 && !data1) {
    return null;
  }

  return (
    <View style={styles.container}>
      { loading1 ? <ActivityIndicator size="large" color="#00d1b2" /> : <DietData data1={data1} /> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  error: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Diet;