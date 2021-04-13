/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const DietForm = ({ search1, onSetSearch, onSubmit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Food name and press search button</Text>
      <View>
        <TextInput style={styles.input} placeholder="Enter Food name..." value={search1} onChangeText={(val) => onSetSearch(val)} />
        <Button title="Search" onPress={onSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 4,
    backgroundColor: '#fff',
    color: '#363636',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DietForm;