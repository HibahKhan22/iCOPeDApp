/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DietForm = ({ search, onSetSearch, onSubmit }) => {
  return (    <View style={styles.container}>
    <ImageBackground
            source={require('../assets/banner/weather3.png')}
            resizeMode="cover"
            style={{height:200,
            width: '100%',
            alignSelf: 'center',
            borderRadius: 8}} >
    
    <View style={styles.searchSection}>
       <View style={styles.searchIcon}>
      <Ionicons name='ios-search-circle' color='#43BFC7' size={30} />
      </View>
      <TextInput  style={styles.input} placeholderTextColor='black' placeholder="Enter food name" value={search} onChangeText={(val) => onSetSearch(val)} />
      <Button title="Search" onPress={onSubmit} />
    </View>
    
    </ImageBackground>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  padding: 0,
  backgroundColor: '#f1f1f1',
},
heading: {
  fontSize: 20,
  textAlign: 'center',
  marginBottom: 20,
},
searchSection: {
  marginTop:'20%',
  width:'80%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  alignSelf:'center',
  borderBottomRightRadius: 20,
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
  borderBottomLeftRadius: 20,

},
searchIcon: {
  padding: 10,
},
input: {
  flex: 1,
  paddingTop: 10,
  paddingRight: 10,
  paddingBottom: 10,
  paddingLeft: 0,
  backgroundColor: '#fff',
  color: '#424242',
},
});


export default DietForm;