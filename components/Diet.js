import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import DietData from './DietData';

const Diet = ({ loading, data1, error1 }) => {
  if (error1) {
    console.log("Dietjs:",error1);
    console.log("Dietjs:",error1);
    return <View style={styles.container}>
      <Text style={styles.error}>{error1}</Text>
    </View>;
  }

  if (!loading && !data1) {
    console.log("Dietjs loading",loading);
    console.log("Dietjs data",data1);
    console.log("Dietjs:",error1);
    return null;
  }
  console.log("diet data",data1);
  return (
    <View style={styles.container}>
      { loading ? <ActivityIndicator size="large" color="#00d1b2" /> : <DietData data={data1} /> }
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